import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export type Mapping = {
	
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type DepositData = {
	partnerId: ReturnNumber,
	amount: ReturnNumber,
	destAmount: ReturnNumber,
	srcToken: AccountId,
	refundRecipient: AccountId,
	destChainIdBytes: Array<number>
}

export interface Error {
	genericError ? : string,
	onlyAdmin ? : null
}

export class ErrorBuilder {
	static GenericError(value: string): Error {
		return {
			genericError: value,
		};
	}
	static OnlyAdmin(): Error {
		return {
			onlyAdmin: null,
		};
	}
}

export type Hash = string | number[]

