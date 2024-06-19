import type BN from 'bn.js';

export type AccountId = string | number[]

export type Mapping = {
	
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type TransferPayload = {
	destChainIdBytes: Array<(number | string | BN)>,
	recipient: Array<(number | string | BN)>,
	srcToken: AccountId,
	srcAmount: (string | number | BN),
	partnerId: (string | number | BN)
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

