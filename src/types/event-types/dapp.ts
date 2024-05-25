import type {ReturnNumber} from "@dpowxconsensus/typechain-types";
import type * as ReturnTypes from '../types-returns/dapp';

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

