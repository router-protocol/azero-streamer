import * as path from 'path';

require("dotenv").config({ path: path.resolve(__dirname, '../../.env') });

export const AZERO_CONFIG = {
    networkId: "azero-testnet", // Update this as per your network
    nodeUrl: "wss://rpc.azero.dev", // Update this to Azero's RPC endpoint
    explorerUrl: "https://explorer.azero.dev", // Update this to Azero's explorer URL, if available
    assetForwarder: "asset_forwarder_contract_address", // Update this with the Azero contract address
    s3BucketName: "azero-lake-data-testnet", // Update or remove if not applicable
    s3RegionName: "eu-central-1", // Update as per your S3 configuration
    startBlockHeight: parseInt(process.env.START_BLOCK || '1'), // Provide a default string '1' if START_BLOCK is not defined
    blocksPreloadPoolSize: 1, // Adjust as needed for your application
};

export const MONGO_DB_URI = process.env.MONGO_DB_URI ?? "mongodb://127.0.0.1:27017/";
export const CHAIN_ID = process.env.CHAIN_ID ?? "azero-testnet"; // Update default to match your Azero network
export const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL; // For alerting, if applicable
export const NETWORK = process.env.NETWORK ?? "testnet"; // Adjust as per your environment setup

export const LOOK_BACK_BLOCKS = 100; // Number of blocks to look back for re-syncing or other purposes
export const ALERTER_ACTIVE = process.env.ALERTER_ACTIVE === "true" ?? false; // Feature flag for enabling/disabling alerts
