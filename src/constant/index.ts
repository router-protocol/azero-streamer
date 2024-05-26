import * as path from 'path';
import type { KeypairType } from "@polkadot/util-crypto/types";

require("dotenv").config({ path: path.resolve(__dirname, '../../.env') });

type Chain = {
  type: KeypairType;
  id: string;
  name: string;
  nodeWSUrl: string;
  startBlock: number;
};

export const AlephZeroTestnet: Chain = {
  id: "aleph-testnet",
  name: "Aleph Zero Testnet",
  type: "sr25519", // or ed25519 :  *25519
  nodeWSUrl: process.env.AZERO_NODE_WS_URL,
  startBlock: Number(process.env.START_BLOCK),
};

export const AlephZeroMainnet: Chain = {
  id: "aleph-mainnet",
  name: "Aleph Zero Mainnet",
  type: "sr25519", // or ed25519 :  *25519
  nodeWSUrl: process.env.AZERO_NODE_WS_URL,
  startBlock: Number(process.env.START_BLOCK),
};

const idmp = {
  "aleph-testnet": AlephZeroTestnet,
  "aleph-mainnet": AlephZeroMainnet
};

export const getNetwork = (id: string) => idmp[id];

export const MONGO_DB_URI = process.env.MONGO_DB_URI ?? "mongodb://127.0.0.1:27017/";
export const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL; // For alerting, if applicable
export const ALERTER_ACTIVE = process.env.ALERTER_ACTIVE === "true" ?? false; // Feature flag for enabling/disabling alerts
