import type { KeypairType } from "@polkadot/util-crypto/types";
import config from './config.json';


type Chain = {
  type: KeypairType;
  id: string;
  name: string;
  rpcs: string[];
};

export const AlephZeroTestnet: Chain = {
  id: "aleph-testnet",
  name: "Aleph Zero Testnet",
  type: "sr25519", // or ed25519 :  *25519
  rpcs: [config.TESTNET_RPCS[0], config.TESTNET_RPCS[1]],
};

export const AlephZeroMainnet: Chain = {
  id: "aleph-testnet",
  name: "Aleph Zero Mainnet",
  type: "sr25519", // or ed25519 :  *25519
  rpcs: [config.MAINNET_RPCS[0], config.MAINNET_RPCS[1]],
};

const idmp = {
  "aleph-testnet": AlephZeroTestnet,
  "aleph-mainnet": AlephZeroMainnet
};

export const getNetwork = (id: string) => idmp[id];

