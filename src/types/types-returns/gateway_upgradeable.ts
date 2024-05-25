import type BN from 'bn.js';
import type {ReturnNumber} from '@dpowxconsensus/typechain-types';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type ValsetArgs = {
	validators: Array<Array<number>>,
	powers: Array<number>,
	valsetNonce: ReturnNumber
}

export interface Error {
	invalidFee ? : ReturnNumber,
	theSenderIsMaliciousContract ? : null,
	incorrectCheckpoint ? : null,
	invalidValsetNonce ? : ReturnNumber,
	malformedNewValidatorSet ? : null,
	malformedCurrentValidatorSet ? : null,
	insufficientPower ? : number,
	invalidSignature ? : null,
	iReceiveAlreadyHandled ? : string,
	iAckAlreadyHandled ? : ReturnNumber,
	roleIsNotPresent ? : null,
	senderMustBeAnAdmin ? : null,
	theGatewayIsUnpaused ? : null,
	theGatewayIsPaused ? : null,
	accountAlreadyHasTheRole ? : null,
	accountDoesNotHasTheRole ? : null,
	invalidDstChainId ? : string,
	invalidAddress ? : null,
	genericError ? : string,
	onlyResourceSetter ? : null,
	onlyAdmin ? : null,
	onlyPauser ? : null,
	nativeTransferFailed ? : null
}

export class ErrorBuilder {
	static InvalidFee(value: ReturnNumber): Error {
		return {
			invalidFee: value,
		};
	}
	static TheSenderIsMaliciousContract(): Error {
		return {
			theSenderIsMaliciousContract: null,
		};
	}
	static IncorrectCheckpoint(): Error {
		return {
			incorrectCheckpoint: null,
		};
	}
	static InvalidValsetNonce(value: ReturnNumber): Error {
		return {
			invalidValsetNonce: value,
		};
	}
	static MalformedNewValidatorSet(): Error {
		return {
			malformedNewValidatorSet: null,
		};
	}
	static MalformedCurrentValidatorSet(): Error {
		return {
			malformedCurrentValidatorSet: null,
		};
	}
	static InsufficientPower(value: number): Error {
		return {
			insufficientPower: value,
		};
	}
	static InvalidSignature(): Error {
		return {
			invalidSignature: null,
		};
	}
	static IReceiveAlreadyHandled(value: string): Error {
		return {
			iReceiveAlreadyHandled: value,
		};
	}
	static IAckAlreadyHandled(value: ReturnNumber): Error {
		return {
			iAckAlreadyHandled: value,
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
	static TheGatewayIsUnpaused(): Error {
		return {
			theGatewayIsUnpaused: null,
		};
	}
	static TheGatewayIsPaused(): Error {
		return {
			theGatewayIsPaused: null,
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
	static GenericError(value: string): Error {
		return {
			genericError: value,
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
	static OnlyPauser(): Error {
		return {
			onlyPauser: null,
		};
	}
	static NativeTransferFailed(): Error {
		return {
			nativeTransferFailed: null,
		};
	}
}

export type RequestPayload = {
	routeAmount: ReturnNumber,
	requestIdentifier: ReturnNumber,
	requestTimestamp: ReturnNumber,
	srcChainId: string,
	routeRecipient: string,
	destChainId: string,
	asmAddress: string,
	requestSender: string,
	handlerAddress: string,
	packet: Array<number>,
	isReadCall: boolean
}

export type CrossChainAckPayload = {
	requestIdentifier: ReturnNumber,
	ackRequestIdentifier: ReturnNumber,
	destChainId: string,
	requestSender: string,
	execData: Array<number>,
	execFlag: boolean
}

