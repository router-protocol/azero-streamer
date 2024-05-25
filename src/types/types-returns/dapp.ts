import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export type Mapping = {
	
}


export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface DappError {
	custom ? : string
}

export class DappErrorBuilder {
	static Custom(value: string): DappError {
		return {
			custom: value,
		};
	}
}

export type Hash = string | number[]

