import { ApiPromise, WsProvider } from '@polkadot/api';
import { Event, EventRecord } from '@polkadot/types/interfaces';
import logger from './logger';
import { BN } from '@polkadot/util';
import Keyring from "@polkadot/keyring";
import { updateLastUpdatedBlock, getLastSyncedBlock } from './db/mongoDB/action/chainState';
import { getCollection, initializeMongoDB } from './db/mongoDB';
import { DecodedEvent } from '@polkadot/api-contract/types';
import { Codec } from '@polkadot/types-codec/types';
import { Collection, Document } from 'mongodb';
import { ChainGrpcMultiChainApi, getEndpointsForNetwork, getNetworkType } from '@routerprotocol/router-chain-sdk-ts';
import config from './config.json';
import Gateway from "./types/contracts/gateway_contract";
import AssetForwarder from "./forwarder-types/contracts/asset_forwarder";
import { getNetwork } from "./chain.config";
import { debug } from 'console';


interface EventData {
    [key: string]: string | number | boolean;
}

export async function initialize() {

    await initializeMongoDB();
    debugger
    const api = await ApiPromise.create({ provider: new WsProvider(config.AZERO_NODE_WS_URL) });

    const network = getNetwork(config.ChainId);

    const keyring = new Keyring({ type: network.type });
    
    const deployer = keyring.addFromMnemonic(process.env.MNEMONIC);
    
    const EXPLORER_ENVIRONMENT: string = config.EXPLORER_ENVIRONMENT;
    
    const endpoint = getEndpointsForNetwork(getNetworkType(EXPLORER_ENVIRONMENT.toLowerCase())).grpcEndpoint;
    
    const multiClientClient = new ChainGrpcMultiChainApi(endpoint);
    
    const contractConfigs = await multiClientClient.fetchAllContractConfig();
    
    const gatewayConfig = contractConfigs.contractconfigList.find(e => e.chainid == config.ChainId && e.contracttype == 0 && e.contractEnabled);
    
    if (!gatewayConfig) throw new Error('Gateway contract configuration not fetched from chain.');
    
    const ss5588Gateway = api.registry.createType("AccountId", gatewayConfig.contractaddress).toString();
    
    const gateway = new Gateway(ss5588Gateway, deployer, api);

    const assetForwarderConfig = contractConfigs.contractconfigList.find(e => e.chainid == config.ChainId && e.contracttype == 1 && e.contractEnabled);

    if (!assetForwarderConfig) throw new Error('assetForwarder contract configuration not fetched from chain.');
    
    const ss5588AssetForwarder = api.registry.createType("AccountId", assetForwarderConfig.contractaddress).toString();
    
    const assetForwarder = new AssetForwarder(ss5588AssetForwarder, deployer, api);
    
    const chainStateCollection = await getCollection('chainState');
    
    let currentBlock = await determineStartBlock(chainStateCollection as any);

    while (true) {
        const latestBlockHash = await api.rpc.chain.getFinalizedHead();
        const latestBlock = await api.rpc.chain.getBlock(latestBlockHash);
        const latestBlockNumber = latestBlock.block.header.number.toNumber();

        if (currentBlock > latestBlockNumber) {
            logger.info(`Current block number ${currentBlock} is greater than latest block number ${latestBlockNumber}. Restarting streamer service...`);
            startStreamerService();  // Restart the streamer service
            return;
        }

        logger.info(`Starting streaming service from block ${currentBlock}`);
        while (currentBlock <= latestBlockNumber) {
            await processBlockEvents(api,gateway,assetForwarder,currentBlock);
            currentBlock++; // Move to the next block
            await updateLastUpdatedBlock(chainStateCollection as any, currentBlock);
        }
    }
}


async function processBlockEvents(api: ApiPromise, gateway: Gateway, assetForwarder: AssetForwarder ,blockNumber: number) {
    try {
        const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
        const signedBlock = await api.rpc.chain.getBlock(blockHash);
        const allEvents = await api.query.system.events.at(blockHash) as EventRecord[];

        // Fetch the block timestamp
        const timestampCodec = await api.query.timestamp.now.at(blockHash);

        // Assert that the timestamp is indeed a BN (BigNumber) before calling toNumber
        const timestampMillis = (timestampCodec as any).toBigInt();

        // Convert to UNIX timestamp in seconds
        const timestamp = Number((Number(timestampMillis) / 1000).toFixed(0));

        // Iterate through each extrinsic in the block
        signedBlock.block.extrinsics.forEach((extrinsic, index) => {
            // Extrinsics may have multiple associated events, filter relevant events
            const events = allEvents.filter(({ phase }) =>
                phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index)
            );

            events.forEach((record) => {
                const { event } = record;
                if (event.method === "ContractEmitted") {
                    const contractAddress = event.data[0].toString();
                    const txHash = extrinsic.hash.toHex();
                    if (contractAddress == gateway.address){
                        
                        logger.info(`Event fetched from Gateway contract : ${contractAddress}`);                        
                        processEvent(contractAddress,event, blockNumber, txHash, timestamp); 
                    
                    } else if (contractAddress == assetForwarder.address) {
                        
                        logger.info(`Event fetched from AssetForwarder contract : ${contractAddress}`);              
                        processEvent(contractAddress,event, blockNumber, txHash, timestamp); 
                    
                    } else {
                        logger.info(`Not relevant event`);
                    }
                }
            });
        });
    } catch (error) {
        logger.error(`Error processing block ${blockNumber}: ${error}`);
    }
}

async function processEvent(contractAddress : any,event: Event, blockNumber: number, txHash: string, timestamp: any) {
   
    const decodedEvent = contractAddress.abi.decodeEvent(Uint8Array.from(Buffer.from(event.data[1].toHex().slice(2), "hex")));
    const formattedEvent: EventData = formatEvent(decodedEvent);
    logger.info(`Contract Event at Block ${blockNumber}: ${decodedEvent.event.identifier}`);
    logger.info(`Transaction Hash: ${txHash}`);
    logger.info(`Timestamp: ${timestamp}`);
    logger.info(`Event Data: ${JSON.stringify(formattedEvent, null, 2)}`);
   

    await saveEventToDatabase(contractAddress, blockNumber, decodedEvent.event.identifier, formattedEvent, txHash, timestamp);
}

function formatEvent(decodedEvent: DecodedEvent) {
    const formattedEvent: EventData = {};
    decodedEvent.args.forEach((arg, index) => {
        const argName = decodedEvent.event.args[index].name;
        // Pass argName to formatArg to handle execStatus conversion
        formattedEvent[argName] = formatArg(arg, argName);
    });
    return formattedEvent;
}


function formatArg(arg: Codec | ArrayBuffer | { valueOf(): ArrayBuffer | SharedArrayBuffer; }, argName: string) {
    // Convert 'execStatus' and 'success' fields to boolean based on their string values
    if (argName === 'execStatus' || argName === 'success' || argName === 'initiateWithdrawal' || argName === 'execFlag') {
        return arg.toString() === 'true';
    }
    
    // Process and return other fields according to their inherent data types
    if (arg instanceof BN) {
        // For Big Number instances, convert to string
        return arg.toString();
    } else if (arg instanceof Uint8Array) {
        // For Uint8Array instances (e.g., byte arrays), convert to hex string
        return `0x${Buffer.from(arg).toString('hex')}`;
    } else {
        // Fallback for other types, convert directly to string
        // This might need adjustment based on the specific types and expected formats
        return arg.toString();
    }
}


async function saveEventToDatabase(contractAddress: string, blockNumber: number, eventName: string, eventData: EventData, txHash: string, timestamp: any) {

    const collection = await getCollection('contractEvents');
    if (collection) {
        const blockLog = {
            contractAddress,
            blockNumber,
            txHash, 
            timestamp,
            eventName,
            eventData
        } as any;
        await collection.insertOne(blockLog);
    } else {
        logger.error('Failed to retrieve contractEvents collection');
    }
}

async function determineStartBlock(chainStateCollection: Collection<Document> | Collection<Document> | undefined) {
    const lastSyncedBlock = await getLastSyncedBlock(chainStateCollection as any);
    console.log("lastSyncedBlock : ", lastSyncedBlock)
    return lastSyncedBlock > 0 ? lastSyncedBlock : config.START_BLOCK_HEIGHT;
    //return START_BLOCK_HEIGHT
}

export async function startStreamerService() {
    try {
      logger.info("Initializing Streamer");
        
      await initialize();
      
    } catch (error) {
  
      logger.error(`Failed to start listener service: ${error.message} -> Retrying after a delay...`);
      setTimeout(startStreamerService, 5000);  
  
    }
}
