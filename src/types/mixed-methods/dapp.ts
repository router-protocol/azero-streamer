/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import { txSignAndSend } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/dapp';
import type * as ReturnTypes from '../types-returns/dapp';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/dapp.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/dapp.json';


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
	* setDappMetadata
	*
	* @param { Array<(number | string | BN)> } feePayerAddress,
	* @returns { void }
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setDappMetadata", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [feePayerAddress], __options);
	}

	/**
	* iSend
	*
	* @param { (string | number | BN) } routeAmount,
	* @param { Array<(number | string | BN)> } routeRecipient,
	* @param { Array<(number | string | BN)> } destChainId,
	* @param { Array<(number | string | BN)> } requestMetadata,
	* @param { Array<(number | string | BN)> } requestPacket,
	* @returns { void }
	*/
	"iSend" (
		routeAmount: (string | number | BN),
		routeRecipient: Array<(number | string | BN)>,
		destChainId: Array<(number | string | BN)>,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iSend", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options);
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
	* getPingedCnt
	*
	* @param { string } chainId,
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getPingedCnt" (
		chainId: string,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPingedCnt", [chainId], __options, (result) => { return handleReturnType(result, getTypeDescription(23, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getChainId
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getChainId" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getChainId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(24, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getContractAddress
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getContractAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getContractAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(25, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getGatewayContractAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getGatewayContractAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getGatewayContractAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(26, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iReceive
	*
	* @param { Array<(number | string | BN)> } requestSender,
	* @param { Array<(number | string | BN)> } packet,
	* @param { Array<(number | string | BN)> } srcChainId,
	* @returns { void }
	*/
	"iReceive" (
		requestSender: Array<(number | string | BN)>,
		packet: Array<(number | string | BN)>,
		srcChainId: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDapp::iReceive", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [requestSender, packet, srcChainId], __options);
	}

	/**
	* iAck
	*
	* @param { (string | number | BN) } requestIdentifier,
	* @param { boolean } execFlag,
	* @param { Array<(number | string | BN)> } execData,
	* @returns { void }
	*/
	"iAck" (
		requestIdentifier: (string | number | BN),
		execFlag: boolean,
		execData: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDapp::iAck", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [requestIdentifier, execFlag, execData], __options);
	}

}