import { ApiPromise, WsProvider } from '@polkadot/api';
import { Event, EventRecord } from '@polkadot/types/interfaces';
import logger from './logger';
import { Abi } from '@polkadot/api-contract';
import fs from 'fs';
import { BN } from '@polkadot/util';
import { updateLastUpdatedBlock, getLastSyncedBlock } from './db/mongoDB/action/chainState';
import { getCollection, initializeMongoDB } from './db/mongoDB';
import { CONTRACTS_TO_TRACK, EVENTS_TO_TRACK, AZERO_NODE_WS_URL, START_BLOCK_HEIGHT, END_BLOCK_HEIGHT, CONTRACTS_TO_ABI_PATHS } from './config';
import { DecodedEvent } from '@polkadot/api-contract/types';
import { Codec } from '@polkadot/types-codec/types';
import { Collection, Document } from 'mongodb';

interface ContractAbis {
    [address: string]: Abi;
}

interface EventData {
    [key: string]: string | number;
}

const contractAbis: ContractAbis = {};
Object.keys(CONTRACTS_TO_ABI_PATHS).forEach((address) => {
    contractAbis[address] = new Abi(JSON.parse(fs.readFileSync(CONTRACTS_TO_ABI_PATHS[address], 'utf8')));
});

async function processBlockEvents(api: ApiPromise, blockNumber: number) {
    try {
        const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
        const events = await api.query.system.events.at(blockHash) as EventRecord[];

        for (const record of events) {
            const { event } = record;
            if (event.method === "ContractEmitted" && CONTRACTS_TO_TRACK.includes(event.data[0].toString())) {
                await processEvent(event, blockNumber);
            }
        }
        
    } catch (error) {
        logger.error(`Error processing block ${blockNumber}: ${error}`);
        // Implement retry logic or additional error handling here
    }
}

async function processEvent(event: Event, blockNumber: number) {
    const contractAddress = event.data[0].toString();
    const abi = contractAbis[contractAddress];

    if (!abi) {
        logger.error(`ABI not found for contract address: ${contractAddress}`);
        return;
    }

    const decodedEvent = abi.decodeEvent(Uint8Array.from(Buffer.from(event.data[1].toHex().slice(2), "hex")));
    const formattedEvent: EventData = formatEvent(decodedEvent);
    logger.info(`Contract Event at Block ${blockNumber}: ${decodedEvent.event.identifier}`);
    logger.info(`Event Data: ${JSON.stringify(formattedEvent, null, 2)}`);

    await saveEventToDatabase(contractAddress, blockNumber, decodedEvent.event.identifier, formattedEvent);
}

function formatEvent(decodedEvent: DecodedEvent) {
    const formattedEvent: EventData = {};
    decodedEvent.args.forEach((arg, index) => {
        const argName = decodedEvent.event.args[index].name;
        formattedEvent[argName] = formatArg(arg);
    });
    return formattedEvent;
}

function formatArg(arg: Codec | ArrayBuffer | { valueOf(): ArrayBuffer | SharedArrayBuffer; }) {
    if (arg instanceof BN) {
        return arg.toString();
    } else if (arg instanceof Uint8Array) {
        return `0x${Buffer.from(arg).toString('hex')}`;
    } else {
        return arg.toString();
    }
}

async function saveEventToDatabase(contractAddress: string, blockNumber: number, eventName: string, eventData: EventData) {
    const collection = await getCollection('contractEvents');
    if (collection) {
        const blockLog = {
            contractAddress,
            blockNumber,
            eventName,
            eventData,
        } as any ;
        await collection.insertOne(blockLog);
    } else {
        logger.error('Failed to retrieve contractEvents collection');
    }
}

export async function startStreamService() {
    await initializeMongoDB();
    const api = await ApiPromise.create({ provider: new WsProvider(AZERO_NODE_WS_URL) });

    const chainStateCollection = await getCollection('chainState');
    let currentBlock = await determineStartBlock(chainStateCollection as any);
    logger.info(`Starting streaming service from block ${currentBlock}`);

    while (currentBlock <= END_BLOCK_HEIGHT) {
        await processBlockEvents(api, currentBlock);
        currentBlock++; // Move to the next block
        await updateLastUpdatedBlock(chainStateCollection as any, currentBlock);
    }
}

async function determineStartBlock(chainStateCollection: Collection<Document> | Collection<Document> | undefined) {
    const lastSyncedBlock = await getLastSyncedBlock(chainStateCollection as any);
    console.log("lastSyncedBlock : ", lastSyncedBlock)
    return lastSyncedBlock > 0 ? lastSyncedBlock : START_BLOCK_HEIGHT;
    //return START_BLOCK_HEIGHT
}


export { CONTRACTS_TO_TRACK };