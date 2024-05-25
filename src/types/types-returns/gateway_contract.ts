import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export type Mapping = {
	
}


export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type ValsetArgs = {
	validators: Array<Array<number>>,
	powers: Array<number>,
	valsetNonce: ReturnNumber
}

export interface GatewayError {
	custom ? : string,
	invalidFee ? : null,
	theSenderIsMaliciousContract ? : null,
	incorrectCheckpoint ? : null,
	invalidValsetNonce ? : null,
	malformedNewValidatorSet ? : null,
	malformedCurrentValidatorSet ? : null,
	insufficientPower ? : null,
	invalidSignature ? : null,
	iReceiveAlreadyHandled ? : null,
	iAckAlreadyHandled ? : null,
	invalidDstChainId ? : null,
	invalidAddress ? : null,
	nativeTransferFailed ? : null,
	addressFromStrError ? : null,
	onlyResourceSetter ? : null,
	onlyAdmin ? : null,
	onlyPauser ? : null,
	paused ? : null,
	unPaused ? : null,
	roleIsNotPresent ? : null,
	senderMustBeAnAdmin ? : null,
	accountDoesNotHasTheRole ? : null,
	accountAlreadyHasTheRole ? : null,
	invalidContractType ? : null,
	invalidVersion ? : null,
	selfCallNotPossible ? : null,
	overFlow ? : null
}

export class GatewayErrorBuilder {
	static Custom(value: string): GatewayError {
		return {
			custom: value,
		};
	}
	static InvalidFee(): GatewayError {
		return {
			invalidFee: null,
		};
	}
	static TheSenderIsMaliciousContract(): GatewayError {
		return {
			theSenderIsMaliciousContract: null,
		};
	}
	static IncorrectCheckpoint(): GatewayError {
		return {
			incorrectCheckpoint: null,
		};
	}
	static InvalidValsetNonce(): GatewayError {
		return {
			invalidValsetNonce: null,
		};
	}
	static MalformedNewValidatorSet(): GatewayError {
		return {
			malformedNewValidatorSet: null,
		};
	}
	static MalformedCurrentValidatorSet(): GatewayError {
		return {
			malformedCurrentValidatorSet: null,
		};
	}
	static InsufficientPower(): GatewayError {
		return {
			insufficientPower: null,
		};
	}
	static InvalidSignature(): GatewayError {
		return {
			invalidSignature: null,
		};
	}
	static IReceiveAlreadyHandled(): GatewayError {
		return {
			iReceiveAlreadyHandled: null,
		};
	}
	static IAckAlreadyHandled(): GatewayError {
		return {
			iAckAlreadyHandled: null,
		};
	}
	static InvalidDstChainId(): GatewayError {
		return {
			invalidDstChainId: null,
		};
	}
	static InvalidAddress(): GatewayError {
		return {
			invalidAddress: null,
		};
	}
	static NativeTransferFailed(): GatewayError {
		return {
			nativeTransferFailed: null,
		};
	}
	static AddressFromStrError(): GatewayError {
		return {
			addressFromStrError: null,
		};
	}
	static OnlyResourceSetter(): GatewayError {
		return {
			onlyResourceSetter: null,
		};
	}
	static OnlyAdmin(): GatewayError {
		return {
			onlyAdmin: null,
		};
	}
	static OnlyPauser(): GatewayError {
		return {
			onlyPauser: null,
		};
	}
	static Paused(): GatewayError {
		return {
			paused: null,
		};
	}
	static UnPaused(): GatewayError {
		return {
			unPaused: null,
		};
	}
	static RoleIsNotPresent(): GatewayError {
		return {
			roleIsNotPresent: null,
		};
	}
	static SenderMustBeAnAdmin(): GatewayError {
		return {
			senderMustBeAnAdmin: null,
		};
	}
	static AccountDoesNotHasTheRole(): GatewayError {
		return {
			accountDoesNotHasTheRole: null,
		};
	}
	static AccountAlreadyHasTheRole(): GatewayError {
		return {
			accountAlreadyHasTheRole: null,
		};
	}
	static InvalidContractType(): GatewayError {
		return {
			invalidContractType: null,
		};
	}
	static InvalidVersion(): GatewayError {
		return {
			invalidVersion: null,
		};
	}
	static SelfCallNotPossible(): GatewayError {
		return {
			selfCallNotPossible: null,
		};
	}
	static OverFlow(): GatewayError {
		return {
			overFlow: null,
		};
	}
}

export type RequestPayload = {
	routeAmount: ReturnNumber,
	requestIdentifier: ReturnNumber,
	requestTimestamp: ReturnNumber,
	srcChainId: Array<number>,
	routeRecipient: AccountId,
	destChainId: Array<number>,
	asmAddress: AccountId,
	requestSender: Array<number>,
	handlerAddress: AccountId,
	packet: Array<number>,
	isReadCall: boolean
}

export type CrossChainAckPayload = {
	requestIdentifier: ReturnNumber,
	ackRequestIdentifier: ReturnNumber,
	destChainId: Array<number>,
	requestSender: AccountId,
	execData: Array<number>,
	execFlag: boolean
}

export type Hash = string | number[]

