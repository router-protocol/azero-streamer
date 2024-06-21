import * as path from 'path';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { EventRecord } from '@polkadot/types/interfaces';
import logger from './logger';
import { BN } from '@polkadot/util';
import Keyring from "@polkadot/keyring";
import { updateLastUpdatedBlock, getLastSyncedBlock } from './db/mongoDB/action/chainState';
import { getCollection, initializeMongoDB, closeMongoDBConnection } from './db/mongoDB'; 
import { DecodedEvent } from '@polkadot/api-contract/types';
import { Codec } from '@polkadot/types-codec/types';
import { Collection, Document } from 'mongodb';
import { ChainGrpcMultiChainApi, getEndpointsForNetwork, getNetworkType } from '@routerprotocol/router-chain-sdk-ts';
import Gateway from "./types/contracts/gateway_contract";
import AssetForwarder from "./forwarder-types/contracts/asset_forwarder";
import AssetBridge from "./asset-bridge-types/contracts/asset_bridge";
import { getNetwork } from "./constant/index";
import axios from 'axios';
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });

interface EventData {
    [key: string]: string | number | boolean | any[];
}

export async function initialize() {
    logger.info('Starting MongoDB initialization');

    await initializeMongoDB();

    const network = getNetwork(process.env.CHAIN_ID);
    logger.info(`Streamer Service Running on : ${network.name}`);

    logger.info('Setting up keyring');
    const keyring = new Keyring({ type: network.type });
    const deployer = keyring.addFromMnemonic(process.env.MNEMONIC);

    logger.info('Creating API instance');
    const api = await ApiPromise.create({ provider: new WsProvider(network.nodeWSUrl) });

    // Check if the API connection is ready
    if (!api.isConnected) {
        throw new Error('Failed to connect to the API');
    }

    const EXPLORER_ENVIRONMENT: string = process.env.EXPLORER_ENVIRONMENT;
    const endpoint = getEndpointsForNetwork(getNetworkType(EXPLORER_ENVIRONMENT.toLowerCase())).grpcEndpoint;

    logger.info('Creating multi-client instance', endpoint);
    const multiClientClient = new ChainGrpcMultiChainApi(endpoint);
    const contractConfigs = await multiClientClient.fetchAllContractConfig();

    logger.info('Fetching gateway configuration');
    const gatewayConfig = contractConfigs.contractconfigList.find(e => e.chainid == network.id && e.contracttype == 0 && e.contractEnabled);
    if (!gatewayConfig) throw new Error('Gateway contract configuration not fetched from chain.');
    const ss5588Gateway = api.registry.createType("AccountId", gatewayConfig.contractaddress).toString();
    const gateway = new Gateway(ss5588Gateway, deployer, api);

    logger.info('Fetching asset forwarder configuration');
    const assetForwarderConfig = contractConfigs.contractconfigList.find(e => e.chainid == network.id && e.contracttype == 1 && e.contractEnabled);
    if (!assetForwarderConfig) throw new Error('assetForwarder contract configuration not fetched from chain.');
    const ss5588AssetForwarder = api.registry.createType("AccountId", assetForwarderConfig.contractaddress).toString();
    const assetForwarder = new AssetForwarder(ss5588AssetForwarder, deployer, api);

    logger.info('Fetching mintBurnBridge');
    const mintBurnBridge = await fetchMintBurnBridge(network.configServiceUrl);
    if (!mintBurnBridge) throw new Error('MintBurnBridge contract not fetched from api.');
    const ss5588MintBurnBridge = api.registry.createType("AccountId", mintBurnBridge).toString();
    const assetBridge = new AssetBridge(ss5588MintBurnBridge, deployer, api);

    logger.info('Fetching chain state collection');
    const chainStateCollection = await getCollection('chainState');

    while (true) {
        let currentBlock = await determineStartBlock(chainStateCollection as any, network.startBlock ? network.startBlock : undefined);
        logger.info('Fetching latest block hash');
        const latestBlockHash = await api.rpc.chain.getFinalizedHead();
        const latestBlock = await api.rpc.chain.getBlock(latestBlockHash);
        const latestBlockNumber = latestBlock.block.header.number.toNumber();

        if (currentBlock >= latestBlockNumber) {
            logger.info(`Current block number ${currentBlock} is >= latest block number ${latestBlockNumber}. Pausing for 10 seconds`);
            await new Promise(resolve => setTimeout(resolve, 10000)); 
            logger.info(`Resuming block processing from block ${currentBlock} after pause`);
            continue; 
        }

        logger.info(`Starting streaming service from block ${currentBlock}`);
        
        await processBlocksInChunks(api, chainStateCollection, gateway, assetForwarder, assetBridge, currentBlock, latestBlockNumber, 1000);
    }
}

async function fetchMintBurnBridge(url: string): Promise<string | undefined> {
    logger.info(`Fetching mintBurnBridge from URL: ${url}`);

    try {
        const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
        const data = response.data;
        const alephTestnetData = data['aleph-testnet'];
        const mintBurnBridge = alephTestnetData ? alephTestnetData.mintBurnBridge : undefined;
        return mintBurnBridge;
    } catch (error) {
        logger.error('Error fetching data:', error);
        return undefined;
    }
}

async function processBlocksInChunks(api: ApiPromise, chainStateCollection: Collection<Document>, gateway: Gateway, assetForwarder: AssetForwarder, assetBridge: AssetBridge, startBlock: number, endBlock: number, defaultChunkSize: number) {
    const totalBlocks = endBlock - startBlock + 1;
    const optimalChunkSize = Math.min(totalBlocks, defaultChunkSize);

    logger.info(`Processing blocks from ${startBlock} to ${endBlock} in chunks of ${optimalChunkSize}`);
    
    const blockRanges = [];
    for (let i = startBlock; i <= endBlock; i += optimalChunkSize) {
        blockRanges.push([i, Math.min(i + optimalChunkSize - 1, endBlock)]);
    }

    for (const [chunkStart, chunkEnd] of blockRanges) {
        logger.info(`Processing chunk from ${chunkStart} to ${chunkEnd}`);
        await processBlocksInParallel(api, gateway, assetForwarder, assetBridge, chunkStart, chunkEnd);
        await updateLastUpdatedBlock(chainStateCollection, chunkEnd);
    }
}

async function processBlocksInParallel(api: ApiPromise, gateway: Gateway, assetForwarder: AssetForwarder, assetBridge: AssetBridge, startBlock: number, endBlock: number) {
    logger.info(`Processing blocks from ${startBlock} to ${endBlock} in parallel`);
    const blockNumbers = Array.from({ length: endBlock - startBlock + 1 }, (_, i) => startBlock + i);
    await Promise.all(blockNumbers.map(blockNumber => processBlockEvents(api, gateway, assetForwarder, assetBridge, blockNumber)));
}

async function processBlockEvents(api: ApiPromise, gateway: Gateway, assetForwarder: AssetForwarder, assetBridge: AssetBridge, blockNumber: number) {
    try {
        const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
        const signedBlock = await api.rpc.chain.getBlock(blockHash);
        const allEvents = await api.query.system.events.at(blockHash) as EventRecord[];

        const timestampCodec = await api.query.timestamp.now.at(blockHash);
        const timestampMillis = (timestampCodec as any).toBigInt();
        const timestamp = Number((Number(timestampMillis) / 1000).toFixed(0));

        const eventsToSave: any[] = [];
        const eventPromises = signedBlock.block.extrinsics.map((extrinsic, index) => {
            const events = allEvents.filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index));
            return Promise.all(events.map(record => processEventIfContract(api, gateway, assetForwarder, assetBridge, record, extrinsic.hash.toHex(), timestamp, blockNumber, eventsToSave)));
        });

        await Promise.all(eventPromises);
        await saveEventsToDatabase(eventsToSave);
    } catch (error) {
        logger.error(`Error processing block ${blockNumber}: ${error}`);
    }
}

async function processEventIfContract(api: ApiPromise, gateway: Gateway, assetForwarder: AssetForwarder, assetBridge: AssetBridge, record: EventRecord, txHash: string, timestamp: number, blockNumber: number, eventsToSave: any[]) {
    const { event } = record;
    if (event.method === "ContractEmitted") {
        const contractAddress = event.data[0].toString();
        if (contractAddress === gateway.address) {
            logger.info(`Event fetched from Gateway contract : ${contractAddress}`);
            await processEvent(gateway, record, blockNumber, txHash, timestamp, eventsToSave);
        } else if (contractAddress === assetForwarder.address) {
            logger.info(`Event fetched from AssetForwarder contract : ${contractAddress}`);
            await processEvent(assetForwarder, record, blockNumber, txHash, timestamp, eventsToSave);
        } else if (contractAddress === assetBridge.address) {
            logger.info(`Event fetched from AssetBridge contract : ${contractAddress}`);
            await processEvent(assetBridge, record, blockNumber, txHash, timestamp, eventsToSave);
        }
    }
}

async function processEvent(contract: any, record: EventRecord, blockNumber: number, txHash: string, timestamp: number, eventsToSave: any[]) {
    logger.info(`Processing event for contract ${contract.address} at block ${blockNumber}`);

    try {
        const decodedEvent = contract.abi.decodeEvent(record);
        const formattedEvent: EventData = formatEvent(decodedEvent);

        logger.info(`Contract Event at Block ${blockNumber}: ${decodedEvent.event.identifier}`);
        logger.info(`Transaction Hash: ${txHash}`);
        logger.info(`Timestamp: ${timestamp}`);
        logger.info(`Event Data: ${JSON.stringify(formattedEvent, null, 2)}`);

        eventsToSave.push({ contractAddress: contract.address, blockNumber, txHash, timestamp, eventName: decodedEvent.event.identifier, eventData: formattedEvent });
    } catch (error) {
        logger.error(`Error decoding event: ${error}`);
    }
}

function formatEvent(decodedEvent: DecodedEvent) {
    logger.info('Formatting event data');
    const formattedEvent: EventData = {};
    decodedEvent.args.forEach((arg, index) => {
        const argName = decodedEvent.event.args[index].name;
        formattedEvent[argName] = formatArg(arg, argName);
    });
    return formattedEvent;
}

function formatArg(arg: Codec | ArrayBuffer | { valueOf(): ArrayBuffer | SharedArrayBuffer }, argName: string) {
    if (argName === 'execStatus' || argName === 'success' || argName === 'initiateWithdrawal' || argName === 'execFlag') {
        return arg.toString() === 'true';
    }

    if (argName === 'validators' || argName === 'powers') {
        if (Array.isArray(arg)) {
            return arg.map(a => a.toString());
        } else {
            return [arg.toString()];
        }
    }

    if (arg instanceof BN) {
        return arg.toString();
    } else if (arg instanceof Uint8Array) {
        return `0x${Buffer.from(arg).toString('hex')}`;
    } else {
        return arg.toString();
    }
}

async function saveEventsToDatabase(events: any[]): Promise<void> {
    const collection = await getCollection('contractEvents');
    if (!collection) throw new Error('Failed to retrieve contractEvents');
    if ( events.length > 0) {
        await collection.insertMany(events);
    }
   
}

async function determineStartBlock(chainStateCollection: Collection<Document> | undefined, startBlockFromConfig?: number) {
    logger.info('Determining start block');
    const lastSyncedBlock = await getLastSyncedBlock(chainStateCollection as any);
    console.log("lastSyncedBlock:", lastSyncedBlock);
    return startBlockFromConfig !== undefined ? startBlockFromConfig : lastSyncedBlock;
}

export async function startStreamerService() {
    try {
        logger.info("Initializing Streamer");
        await initialize();
    } catch (error) {
        logger.error(`Failed to start listener service: ${error.message} -> Retrying after a delay...`);
        await closeMongoDBConnection()
        setTimeout(startStreamerService, 10000);
    }
}
