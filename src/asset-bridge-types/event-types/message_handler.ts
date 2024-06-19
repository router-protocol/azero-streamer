import type {ReturnNumber} from "@dpowxconsensus/typechain-types";
import type * as ReturnTypes from '../types-returns/message_handler';

export interface DepositReverted {
	destChainIdBytes: Array<number>;
	depositNonce: ReturnNumber;
	sender: ReturnTypes.AccountId;
	srcTokenAddress: ReturnTypes.AccountId;
	srcTokenAmount: ReturnNumber;
}

export interface ExecuteWithMessage {
	executeType: number;
	srcChainIdBytes: Array<number>;
	depositNonce: ReturnNumber;
	destToken: ReturnTypes.AccountId;
	destAmount: ReturnNumber;
	recipient: ReturnTypes.AccountId;
	flag: boolean;
	data: Array<number>;
}

export interface Execute {
	executeType: number;
	srcChainIdBytes: Array<number>;
	depositNonce: ReturnNumber;
	destToken: ReturnTypes.AccountId;
	destAmount: ReturnNumber;
	recipient: ReturnTypes.AccountId;
}

export interface TokenTransfer {
	depositor: ReturnTypes.AccountId;
	destChainIdBytes: Array<number>;
	srcToken: ReturnTypes.AccountId;
	srcAmount: ReturnNumber;
	recipient: Array<number>;
	depositId: ReturnNumber;
	partnerId: ReturnNumber;
}

export interface TokenTransferWithInstruction {
	depositor: ReturnTypes.AccountId;
	destChainIdBytes: Array<number>;
	srcToken: ReturnTypes.AccountId;
	srcAmount: ReturnNumber;
	recipient: Array<number>;
	depositId: ReturnNumber;
	partnerId: ReturnNumber;
	destGasLimit: number;
	instruction: Array<number>;
}

export interface ISendEvent {
	version: ReturnNumber;
	routeAmount: ReturnNumber;
	eventNonce: ReturnNumber;
	requestSender: ReturnTypes.AccountId;
	srcChainId: string;
	destChainId: string;
	routeRecipient: string;
	requestMetadata: Array<number>;
	requestPacket: Array<number>;
}

export interface IReceiveEvent {
	requestIdentifier: ReturnNumber;
	eventNonce: ReturnNumber;
	srcChainId: string;
	destChainId: string;
	relayerRouterAddress: string;
	requestSender: string;
	execData: Array<number>;
	execStatus: boolean;
}

export interface IAckEvent {
	ackRequestIdentifier: ReturnNumber;
	ackSrcChainId: string;
	eventNonce: ReturnNumber;
	requestIdentifier: ReturnNumber;
	relayerRouterAddress: string;
	chainId: string;
	data: Array<number>;
	success: boolean;
}

export interface SetDappMetadataEvent {
	eventNonce: ReturnNumber;
	dappAddress: ReturnTypes.AccountId;
	chainId: string;
	feePayerAddress: string;
}

export interface ValsetUpdatedEvent {
	newValsetNonce: ReturnNumber;
	eventNonce: ReturnNumber;
	srcChainId: string;
	validators: Array<Array<number>>;
	powers: Array<number>;
}

export interface BridgeFeeUpdatedEvent {
	oldFee: ReturnNumber;
	newFee: ReturnNumber;
}

export interface Paused {
	account: ReturnTypes.AccountId;
}

export interface Unpaused {
	account: ReturnTypes.AccountId;
}

export interface Approval {
	owner: ReturnTypes.AccountId;
	spender: ReturnTypes.AccountId;
	amount: ReturnNumber;
}

export interface Transfer {
	from: ReturnTypes.AccountId | null;
	to: ReturnTypes.AccountId | null;
	value: ReturnNumber;
}

