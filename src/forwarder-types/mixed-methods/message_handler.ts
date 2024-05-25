/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import { txSignAndSend } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/message_handler';
import type * as ReturnTypes from '../types-returns/message_handler';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/message_handler.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/message_handler.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __callerAddress : string;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* iDeposit
	*
	* @param { ArgumentTypes.DepositData } depositData,
	* @param { Array<(number | string | BN)> } dstToken,
	* @param { Array<(number | string | BN)> } recipient,
	* @returns { void }
	*/
	"iDeposit" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDeposit", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [depositData, dstToken, recipient], __options);
	}

	/**
	* iDepositMessage
	*
	* @param { ArgumentTypes.DepositData } depositData,
	* @param { Array<(number | string | BN)> } dstToken,
	* @param { Array<(number | string | BN)> } recipient,
	* @returns { void }
	*/
	"iDepositMessage" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDepositMessage", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [depositData, dstToken, recipient], __options);
	}

	/**
	* setCode
	*
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { void }
	*/
	"setCode" (
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setCode", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [codeHash], __options);
	}

	/**
	* getTokenBalance
	*
	* @param { ArgumentTypes.AccountId } token,
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getTokenBalance" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getTokenBalance", [token], __options, (result) => { return handleReturnType(result, getTypeDescription(19, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAssetForwarderAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getAssetForwarderAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAssetForwarderAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(20, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* handleMessage
	*
	* @param { ArgumentTypes.AccountId } tokenSent,
	* @param { (string | number | BN) } amount,
	* @param { Array<(number | string | BN)> } message,
	* @returns { void }
	*/
	"handleMessage" (
		tokenSent: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		message: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "messageHandlerTrait::handleMessage", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [tokenSent, amount, message], __options);
	}

}