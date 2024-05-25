/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import { txSignAndSend } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/asset_forwarder';
import type * as ReturnTypes from '../types-returns/asset_forwarder';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/asset_forwarder.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/asset_forwarder.json';


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
	* iDepositInfoUpdate
	*
	* @param { ArgumentTypes.AccountId } srcToken,
	* @param { (string | number | BN) } feeAmount,
	* @param { (string | number | BN) } depositId,
	* @param { boolean } initiateWithdrawal,
	* @returns { void }
	*/
	"iDepositInfoUpdate" (
		srcToken: ArgumentTypes.AccountId,
		feeAmount: (string | number | BN),
		depositId: (string | number | BN),
		initiateWithdrawal: boolean,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDepositInfoUpdate", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [srcToken, feeAmount, depositId, initiateWithdrawal], __options);
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
	* @param { Array<(number | string | BN)> } message,
	* @returns { void }
	*/
	"iDepositMessage" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		message: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iDepositMessage", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [depositData, dstToken, recipient, message], __options);
	}

	/**
	* iRelay
	*
	* @param { ArgumentTypes.RelayData } relayData,
	* @param { string } forwarderRouterAddress,
	* @returns { void }
	*/
	"iRelay" (
		relayData: ArgumentTypes.RelayData,
		forwarderRouterAddress: string,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iRelay", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [relayData, forwarderRouterAddress], __options);
	}

	/**
	* iRelayMessage
	*
	* @param { ArgumentTypes.RelayDataMessage } relayData,
	* @param { string } forwarderRouterAddress,
	* @returns { void }
	*/
	"iRelayMessage" (
		relayData: ArgumentTypes.RelayDataMessage,
		forwarderRouterAddress: string,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iRelayMessage", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [relayData, forwarderRouterAddress], __options);
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
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iReceive", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [requestSender, packet, srcChainId], __options);
	}

	/**
	* rescue
	*
	* @param { ArgumentTypes.AccountId } token,
	* @param { ArgumentTypes.AccountId } recipient,
	* @param { (string | number | BN) } amount,
	* @returns { void }
	*/
	"rescue" (
		token: ArgumentTypes.AccountId,
		recipient: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "rescue", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [token, recipient, amount], __options);
	}

	/**
	* pause
	*
	* @returns { void }
	*/
	"pause" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pause", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* unpause
	*
	* @returns { void }
	*/
	"unpause" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "unpause", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* grantRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	* @returns { void }
	*/
	"grantRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "grantRole", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [role, account], __options);
	}

	/**
	* revokeRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	* @returns { void }
	*/
	"revokeRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "revokeRole", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [role, account], __options);
	}

	/**
	* setRouterMiddlewareBase
	*
	* @param { string } routerMiddlewareBase,
	* @returns { void }
	*/
	"setRouterMiddlewareBase" (
		routerMiddlewareBase: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setRouterMiddlewareBase", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [routerMiddlewareBase], __options);
	}

	/**
	* setChainId
	*
	* @param { string } chainId,
	* @returns { void }
	*/
	"setChainId" (
		chainId: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setChainId", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [chainId], __options);
	}

	/**
	* setGateway
	*
	* @param { ArgumentTypes.AccountId } gateway,
	* @returns { void }
	*/
	"setGateway" (
		gateway: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setGateway", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [gateway], __options);
	}

	/**
	* setCodeHash
	*
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { void }
	*/
	"setCodeHash" (
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setCodeHash", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [codeHash], __options);
	}

	/**
	* getPauseValue
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getPauseValue" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPauseValue", [], __options, (result) => { return handleReturnType(result, getTypeDescription(33, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getChainId
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getChainId" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getChainId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(34, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRouterChainId
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getRouterChainId" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRouterChainId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(27, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getDepositNonce
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getDepositNonce" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getDepositNonce", [], __options, (result) => { return handleReturnType(result, getTypeDescription(35, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getExecuteRecord
	*
	* @param { Array<(number | string | BN)> } messageHash,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getExecuteRecord" (
		messageHash: Array<(number | string | BN)>,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getExecuteRecord", [messageHash], __options, (result) => { return handleReturnType(result, getTypeDescription(33, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* hasRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"hasRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "hasRole", [role, account], __options, (result) => { return handleReturnType(result, getTypeDescription(33, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRoleAdmin
	*
	* @param { Array<(number | string | BN)> } role,
	* @returns { Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getRoleAdmin" (
		role: Array<(number | string | BN)>,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRoleAdmin", [role], __options, (result) => { return handleReturnType(result, getTypeDescription(36, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRouterMiddlewareBase
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getRouterMiddlewareBase" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRouterMiddlewareBase", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getGateway
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getGateway" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getGateway", [], __options, (result) => { return handleReturnType(result, getTypeDescription(39, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getContractVer
	*
	* @returns { Result<[string, string], ReturnTypes.LangError> }
	*/
	"getContractVer" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<[string, string], ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getContractVer", [], __options, (result) => { return handleReturnType(result, getTypeDescription(40, DATA_TYPE_DESCRIPTIONS)); });
	}

}