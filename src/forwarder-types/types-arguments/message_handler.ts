import type BN from 'bn.js';

export type AccountId = string | number[]

export type Mapping = {
	
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type DepositData = {
	partnerId: (string | number | BN),
	amount: (string | number | BN),
	destAmount: (string | number | BN),
	srcToken: AccountId,
	refundRecipient: AccountId,
	destChainIdBytes: Array<(number | string | BN)>
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

