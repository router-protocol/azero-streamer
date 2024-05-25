/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/message_handler';
import type * as ReturnTypes from '../types-returns/message_handler';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/message_handler.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* iDeposit
	*
	* @param { ArgumentTypes.DepositData } depositData,
	* @param { Array<(number | string | BN)> } dstToken,
	* @param { Array<(number | string | BN)> } recipient,
	* @returns { Result<Result<ReturnNumber, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"iDeposit" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<ReturnNumber, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iDeposit", [depositData, dstToken, recipient], __options , (result) => { return handleReturnType(result, getTypeDescription(14, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iDepositMessage
	*
	* @param { ArgumentTypes.DepositData } depositData,
	* @param { Array<(number | string | BN)> } dstToken,
	* @param { Array<(number | string | BN)> } recipient,
	* @returns { Result<Result<ReturnNumber, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"iDepositMessage" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<ReturnNumber, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iDepositMessage", [depositData, dstToken, recipient], __options , (result) => { return handleReturnType(result, getTypeDescription(14, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setCode
	*
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"setCode" (
		codeHash: ArgumentTypes.Hash,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setCode", [codeHash], __options , (result) => { return handleReturnType(result, getTypeDescription(10, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getTokenBalance
	*
	* @param { ArgumentTypes.AccountId } token,
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getTokenBalance" (
		token: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getTokenBalance", [token], __options , (result) => { return handleReturnType(result, getTypeDescription(19, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAssetForwarderAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getAssetForwarderAddress" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAssetForwarderAddress", [], __options , (result) => { return handleReturnType(result, getTypeDescription(20, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* handleMessage
	*
	* @param { ArgumentTypes.AccountId } tokenSent,
	* @param { (string | number | BN) } amount,
	* @param { Array<(number | string | BN)> } message,
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"handleMessage" (
		tokenSent: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		message: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "messageHandlerTrait::handleMessage", [tokenSent, amount, message], __options , (result) => { return handleReturnType(result, getTypeDescription(21, DATA_TYPE_DESCRIPTIONS)); });
	}

}