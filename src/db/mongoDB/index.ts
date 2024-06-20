import { Collection, Db, MongoClient } from 'mongodb';
import { MONGO_DB_URI } from '../../constant'; // Ensure this is the correct path for your constants
import logger from '../../logger'; // Update the import path according to your project structure

// Database Name for Azero data
const dbName = 'azero-streamer-testnet';

export let DBInstance: Db;

// Function to initialize MongoDB connection
async function initializeMongoDB(): Promise<Db | undefined> {
    try {
        logger.info(`Connecting to MongoDB - ${MONGO_DB_URI}`);
        const client = new MongoClient(MONGO_DB_URI);
        await client.connect();
        logger.info(`Connected to MongoDB Server`);
        DBInstance = client.db(dbName);
        return DBInstance;
    } catch (error) {
        logger.error(`Error occurred during MongoDB initialization - ${error}`);
    }
}

// Function to get a specific collection from the MongoDB
async function getCollection(collectionName: string): Promise<Collection<Document> | undefined> {
    try {
        if (!DBInstance) {
            throw new Error('DBInstance is not initialized. Call initializeMongoDB first.');
        }
        return DBInstance.collection(collectionName);
    } catch (error) {
        logger.error(`Error occurred getting collection ${collectionName} - ${error}`);
    }
}

export { initializeMongoDB, getCollection };
