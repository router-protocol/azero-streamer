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
	unequalLength ? : null,
	dstContractNotSet ? : null,
	roleIsNotPresent ? : null,
	senderMustBeAnAdmin ? : null,
	accountAlreadyHasTheRole ? : null,
	accountDoesNotHasTheRole ? : null,
	genericError ? : string,
	amountToLarge ? : null,
	invalidAmount ? : null,
	alreadyExecuted ? : null,
	invalidRefundData ? : null,
	transferFailed ? : null,
	notWhitelisted ? : null,
	invalidTxType ? : null,
	invalidSenderOrSrcChainId ? : null,
	liquidityNotFound ? : null,
	nativeTransferFailed ? : null,
	onlyAdmin ? : null,
	onlyResourceSetter ? : null,
	isPaused ? : null,
	isUnpaused ? : null,
	invalidContractType ? : null,
	invalidVersion ? : null,
	onlyGateway ? : null,
	overflow ? : null,
	underflow ? : null,
	onlyPauser ? : null,
	addressFromVec ? : null
}

export class ErrorBuilder {
	static UnequalLength(): Error {
		return {
			unequalLength: null,
		};
	}
	static DstContractNotSet(): Error {
		return {
			dstContractNotSet: null,
		};
	}
	static RoleIsNotPresent(): Error {
		return {
			roleIsNotPresent: null,
		};
	}
	static SenderMustBeAnAdmin(): Error {
		return {
			senderMustBeAnAdmin: null,
		};
	}
	static AccountAlreadyHasTheRole(): Error {
		return {
			accountAlreadyHasTheRole: null,
		};
	}
	static AccountDoesNotHasTheRole(): Error {
		return {
			accountDoesNotHasTheRole: null,
		};
	}
	static GenericError(value: string): Error {
		return {
			genericError: value,
		};
	}
	static AmountToLarge(): Error {
		return {
			amountToLarge: null,
		};
	}
	static InvalidAmount(): Error {
		return {
			invalidAmount: null,
		};
	}
	static AlreadyExecuted(): Error {
		return {
			alreadyExecuted: null,
		};
	}
	static InvalidRefundData(): Error {
		return {
			invalidRefundData: null,
		};
	}
	static TransferFailed(): Error {
		return {
			transferFailed: null,
		};
	}
	static NotWhitelisted(): Error {
		return {
			notWhitelisted: null,
		};
	}
	static InvalidTxType(): Error {
		return {
			invalidTxType: null,
		};
	}
	static InvalidSenderOrSrcChainId(): Error {
		return {
			invalidSenderOrSrcChainId: null,
		};
	}
	static LiquidityNotFound(): Error {
		return {
			liquidityNotFound: null,
		};
	}
	static NativeTransferFailed(): Error {
		return {
			nativeTransferFailed: null,
		};
	}
	static OnlyAdmin(): Error {
		return {
			onlyAdmin: null,
		};
	}
	static OnlyResourceSetter(): Error {
		return {
			onlyResourceSetter: null,
		};
	}
	static IsPaused(): Error {
		return {
			isPaused: null,
		};
	}
	static IsUnpaused(): Error {
		return {
			isUnpaused: null,
		};
	}
	static InvalidContractType(): Error {
		return {
			invalidContractType: null,
		};
	}
	static InvalidVersion(): Error {
		return {
			invalidVersion: null,
		};
	}
	static OnlyGateway(): Error {
		return {
			onlyGateway: null,
		};
	}
	static Overflow(): Error {
		return {
			overflow: null,
		};
	}
	static Underflow(): Error {
		return {
			underflow: null,
		};
	}
	static OnlyPauser(): Error {
		return {
			onlyPauser: null,
		};
	}
	static AddressFromVec(): Error {
		return {
			addressFromVec: null,
		};
	}
}

export type Hash = string | number[]

