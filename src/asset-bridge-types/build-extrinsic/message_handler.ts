/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@dpowxconsensus/typechain-types';
import { buildSubmittableExtrinsic } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/message_handler';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * iTransfer
	 *
	 * @param { ArgumentTypes.TransferPayload } transferPayload,
	*/
	"iTransfer" (
		transferPayload: ArgumentTypes.TransferPayload,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iTransfer", [transferPayload], __options);
	}

	/**
	 * iTransferWithInstruction
	 *
	 * @param { ArgumentTypes.TransferPayload } transferPayload,
	 * @param { (number | string | BN) } destGasLimit,
	 * @param { Array<(number | string | BN)> } instruction,
	*/
	"iTransferWithInstruction" (
		transferPayload: ArgumentTypes.TransferPayload,
		destGasLimit: (number | string | BN),
		instruction: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iTransferWithInstruction", [transferPayload, destGasLimit, instruction], __options);
	}

	/**
	 * getTokenBalance
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"getTokenBalance" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getTokenBalance", [token], __options);
	}

	/**
	 * getAssetBridgeAddress
	 *
	*/
	"getAssetBridgeAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAssetBridgeAddress", [], __options);
	}

	/**
	 * handleMessage
	 *
	 * @param { ArgumentTypes.AccountId } tokenSent,
	 * @param { (string | number | BN) } amount,
	 * @param { Array<(number | string | BN)> } message,
	*/
	"handleMessage" (
		tokenSent: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		message: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "messageHandlerTrait::handleMessage", [tokenSent, amount, message], __options);
	}

}