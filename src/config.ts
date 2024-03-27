

// Mapping of contract addresses to their corresponding ABI file paths
export const CONTRACTS_TO_ABI_PATHS: { [contractAddress: string]: string } = {
  '5GNqyNFLm8JVkrbBbtY2xYGVZ9JGokSfYWe46GEWXqK3Tzdf': './src/gateway.json', // Update with the actual path
  //'5HDxcHFeZJQwZL3bYawNkhQUE4jv4REnQMk2ULWUd9PtwbfJ': './src/assetForwarder.json'  // Update with the actual path
  // Add more contract address to ABI path mappings as needed
};

// List of contract addresses you want to track events from
export const CONTRACTS_TO_TRACK: string[] = [
  '5GNqyNFLm8JVkrbBbtY2xYGVZ9JGokSfYWe46GEWXqK3Tzdf'//'5HFvHEmssQbqa56nijE3QqHQEHTEq2Au1LwvieDfovskVkB7',
  //'5HDxcHFeZJQwZL3bYawNkhQUE4jv4REnQMk2ULWUd9PtwbfJ'
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

export const START_BLOCK_HEIGHT : number = 58030782; //54079193;56,344,262
//56127683	


//55960968
//55708474
//54597287;//54587810; //54586280;	//54581105;  //54435502;

export const END_BLOCK_HEIGHT : number = 58030782;
