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
	 * iDeposit
	 *
	 * @param { ArgumentTypes.DepositData } depositData,
	 * @param { Array<(number | string | BN)> } dstToken,
	 * @param { Array<(number | string | BN)> } recipient,
	*/
	"iDeposit" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDeposit", [depositData, dstToken, recipient], __options);
	}

	/**
	 * iDepositMessage
	 *
	 * @param { ArgumentTypes.DepositData } depositData,
	 * @param { Array<(number | string | BN)> } dstToken,
	 * @param { Array<(number | string | BN)> } recipient,
	*/
	"iDepositMessage" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDepositMessage", [depositData, dstToken, recipient], __options);
	}

	/**
	 * setCode
	 *
	 * @param { ArgumentTypes.Hash } codeHash,
	*/
	"setCode" (
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setCode", [codeHash], __options);
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
	 * getAssetForwarderAddress
	 *
	*/
	"getAssetForwarderAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAssetForwarderAddress", [], __options);
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