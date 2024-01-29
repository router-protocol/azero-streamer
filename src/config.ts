

// Mapping of contract addresses to their corresponding ABI file paths
export const CONTRACTS_TO_ABI_PATHS: { [contractAddress: string]: string } = {
 // '5EbbMgLUKNYNjLeoYpwBDMRmeXCQMuUQpbfykvPiLo3mzCa1': './path/to/abi_for_contract_1.json', // Update with the actual path
  '5GCsbo3b72kkZ1zdpdEF6FNsS9hTbgr1Aqz9UxaYs9kmnJuo': './src/assetForwarder.json'  // Update with the actual path
  // Add more contract address to ABI path mappings as needed
};

// List of contract addresses you want to track events from
export const CONTRACTS_TO_TRACK: string[] = [
  //'5EbbMgLUKNYNjLeoYpwBDMRmeXCQMuUQpbfykvPiLo3mzCa1',
  '5GCsbo3b72kkZ1zdpdEF6FNsS9hTbgr1Aqz9UxaYs9kmnJuo'
];
  
  // List of event names you want to track
export const EVENTS_TO_TRACK: string[] = [
    "funds_paid",
    "funds_paid_with_message",
    "execute",
    "token_transfer",
    "token_transfer_with_instruction",
    "i_send_event",
    "valset_updated_event",
    "set_dapp_metadata_event",
    "i_receive_event",
    "i_ack_event",
    "funds_deposited",
    "funds_deposited_with_message",
    "deposit_info_update"
];
  
export const AZERO_NODE_WS_URL: string = 'wss://ws.test.azero.dev'; 

export const START_BLOCK_HEIGHT : number = 52287120;

export const END_BLOCK_HEIGHT : number = 52287121;