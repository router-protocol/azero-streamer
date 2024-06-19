import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export type Mapping = {
	
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type TransferPayload = {
	destChainIdBytes: Array<number>,
	recipient: Array<number>,
	srcToken: AccountId,
	srcAmount: ReturnNumber,
	partnerId: ReturnNumber
}

export interface Error {
	genericError ? : string,
	onlyAdmin ? : null,
	invalidAmount ? : null
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
	static InvalidAmount(): Error {
		return {
			invalidAmount: null,
		};
	}
}

