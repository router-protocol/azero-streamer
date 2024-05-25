import type {ReturnNumber} from "@dpowxconsensus/typechain-types";
import type * as ReturnTypes from '../types-returns/asset_forwarder';

export interface FundsDeposited {
	partnerId: ReturnNumber;
	amount: ReturnNumber;
	destChainIdBytes: Array<number>;
	destAmount: ReturnNumber;
	depositId: ReturnNumber;
	srcToken: ReturnTypes.AccountId;
	recipient: Array<number>;
	depositor: ReturnTypes.AccountId;
	destToken: Array<number>;
}

export interface FundsDepositedWithMessage {
	partnerId: ReturnNumber;
	amount: ReturnNumber;
	destChainIdBytes: Array<number>;
	destAmount: ReturnNumber;
	depositId: ReturnNumber;
	srcToken: ReturnTypes.AccountId;
	recipient: Array<number>;
	depositor: ReturnTypes.AccountId;
	destToken: Array<number>;
	message: Array<number>;
}

export interface FundsPaid {
	messageHash: Array<number>;
	forwarder: ReturnTypes.AccountId;
	nonce: ReturnNumber;
	depositId: ReturnNumber;
	srcChainId: Array<number>;
	destToken: ReturnTypes.AccountId;
	destAmount: ReturnNumber;
	forwarderRouterAddress: string;
}

export interface FundsPaidWithMessage {
	messageHash: Array<number>;
	forwarder: ReturnTypes.AccountId;
	nonce: ReturnNumber;
	depositId: ReturnNumber;
	execFlag: boolean;
	execData: Array<number>;
	srcChainId: Array<number>;
	destToken: ReturnTypes.AccountId;
	destAmount: ReturnNumber;
	forwarderRouterAddress: string;
}

export interface DepositInfoUpdate {
	srcToken: ReturnTypes.AccountId;
	feeAmount: ReturnNumber;
	depositId: ReturnNumber;
	eventNonce: ReturnNumber;
	initiateWithdrawal: boolean;
	depositor: ReturnTypes.AccountId;
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

