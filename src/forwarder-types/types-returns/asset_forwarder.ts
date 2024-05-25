import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export type Mapping = {
	
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface Error {
	onlyPauser ? : null,
	overflow ? : null,
	theSenderIsMaliciousContract ? : null,
	roleIsNotPresent ? : null,
	onlyRouterChain ? : null,
	isPaused ? : null,
	isUnpaused ? : null,
	senderMustBeAnAdmin ? : null,
	accountAlreadyHasTheRole ? : null,
	accountDoesNotHasTheRole ? : null,
	invalidDstChainId ? : string,
	invalidAddress ? : null,
	amountToLarge ? : null,
	invalidAmount ? : null,
	alreadyExecuted ? : null,
	invalidRefundData ? : null,
	transferFailed ? : null,
	invalidRecipient ? : null,
	invalidTransferredValue ? : null,
	nativeTransferFailed ? : null,
	invalidSenderOrSrcChainId ? : null,
	onlyResourceSetter ? : null,
	onlyAdmin ? : null,
	onlyGateway ? : null,
	invalidContractType ? : null,
	invalidVersion ? : null,
	custom ? : string
}

export class ErrorBuilder {
	static OnlyPauser(): Error {
		return {
			onlyPauser: null,
		};
	}
	static Overflow(): Error {
		return {
			overflow: null,
		};
	}
	static TheSenderIsMaliciousContract(): Error {
		return {
			theSenderIsMaliciousContract: null,
		};
	}
	static RoleIsNotPresent(): Error {
		return {
			roleIsNotPresent: null,
		};
	}
	static OnlyRouterChain(): Error {
		return {
			onlyRouterChain: null,
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
	static InvalidDstChainId(value: string): Error {
		return {
			invalidDstChainId: value,
		};
	}
	static InvalidAddress(): Error {
		return {
			invalidAddress: null,
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
	static InvalidRecipient(): Error {
		return {
			invalidRecipient: null,
		};
	}
	static InvalidTransferredValue(): Error {
		return {
			invalidTransferredValue: null,
		};
	}
	static NativeTransferFailed(): Error {
		return {
			nativeTransferFailed: null,
		};
	}
	static InvalidSenderOrSrcChainId(): Error {
		return {
			invalidSenderOrSrcChainId: null,
		};
	}
	static OnlyResourceSetter(): Error {
		return {
			onlyResourceSetter: null,
		};
	}
	static OnlyAdmin(): Error {
		return {
			onlyAdmin: null,
		};
	}
	static OnlyGateway(): Error {
		return {
			onlyGateway: null,
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
	static Custom(value: string): Error {
		return {
			custom: value,
		};
	}
}

export type DepositData = {
	partnerId: ReturnNumber,
	amount: ReturnNumber,
	destAmount: ReturnNumber,
	srcToken: AccountId,
	refundRecipient: AccountId,
	destChainIdBytes: Array<number>
}

export type RelayData = {
	amount: ReturnNumber,
	srcChainId: Array<number>,
	depositId: ReturnNumber,
	destToken: AccountId,
	recipient: Array<number>
}

export type RelayDataMessage = {
	amount: ReturnNumber,
	srcChainId: Array<number>,
	depositId: ReturnNumber,
	destToken: AccountId,
	recipient: Array<number>,
	message: Array<number>
}

export type Hash = string | number[]

