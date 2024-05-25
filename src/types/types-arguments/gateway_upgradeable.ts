import type BN from 'bn.js';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type ValsetArgs = {
	validators: Array<Array<(number | string | BN)>>,
	powers: Array<(number | string | BN)>,
	valsetNonce: (string | number | BN)
}

export interface Error {
	invalidFee ? : (string | number | BN),
	theSenderIsMaliciousContract ? : null,
	incorrectCheckpoint ? : null,
	invalidValsetNonce ? : (string | number | BN),
	malformedNewValidatorSet ? : null,
	malformedCurrentValidatorSet ? : null,
	insufficientPower ? : (number | string | BN),
	invalidSignature ? : null,
	iReceiveAlreadyHandled ? : string,
	iAckAlreadyHandled ? : (string | number | BN),
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
	static InvalidFee(value: (string | number | BN)): Error {
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
	static InvalidValsetNonce(value: (string | number | BN)): Error {
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
	static InsufficientPower(value: (number | string | BN)): Error {
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
	static IAckAlreadyHandled(value: (string | number | BN)): Error {
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
	routeAmount: (string | number | BN),
	requestIdentifier: (string | number | BN),
	requestTimestamp: (string | number | BN),
	srcChainId: string,
	routeRecipient: string,
	destChainId: string,
	asmAddress: string,
	requestSender: string,
	handlerAddress: string,
	packet: Array<(number | string | BN)>,
	isReadCall: boolean
}

export type CrossChainAckPayload = {
	requestIdentifier: (string | number | BN),
	ackRequestIdentifier: (string | number | BN),
	destChainId: string,
	requestSender: string,
	execData: Array<(number | string | BN)>,
	execFlag: boolean
}

