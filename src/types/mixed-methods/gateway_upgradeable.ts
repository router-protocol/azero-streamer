/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import { txSignAndSend } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/gateway_upgradeable';
import type * as ReturnTypes from '../types-returns/gateway_upgradeable';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/gateway_upgradeable.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/gateway_upgradeable.json';


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
	* updateValset
	*
	* @param { ArgumentTypes.ValsetArgs } newValset,
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @returns { void }
	*/
	"updateValset" (
		newValset: ArgumentTypes.ValsetArgs,
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "updateValset", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [newValset, currentValset, sigs], __options);
	}

	/**
	* setDappMetadata
	*
	* @param { string } feePayerAddress,
	* @returns { void }
	*/
	"setDappMetadata" (
		feePayerAddress: string,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setDappMetadata", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [feePayerAddress], __options);
	}

	/**
	* iSend
	*
	* @param { (string | number | BN) } version,
	* @param { (string | number | BN) } routeAmount,
	* @param { string } routeRecipient,
	* @param { string } destChainId,
	* @param { Array<(number | string | BN)> } requestMetadata,
	* @param { Array<(number | string | BN)> } requestPacket,
	* @returns { void }
	*/
	"iSend" (
		version: (string | number | BN),
		routeAmount: (string | number | BN),
		routeRecipient: string,
		destChainId: string,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iSend", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [version, routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options);
	}

	/**
	* iReceive
	*
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @param { ArgumentTypes.RequestPayload } requestPayload,
	* @param { string } relayerRouterAddress,
	* @returns { void }
	*/
	"iReceive" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		requestPayload: ArgumentTypes.RequestPayload,
		relayerRouterAddress: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iReceive", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [currentValset, sigs, requestPayload, relayerRouterAddress], __options);
	}

	/**
	* iAck
	*
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @param { ArgumentTypes.CrossChainAckPayload } crossChainAckPayload,
	* @param { string } relayerRouterAddress,
	* @returns { void }
	*/
	"iAck" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		crossChainAckPayload: ArgumentTypes.CrossChainAckPayload,
		relayerRouterAddress: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "iAck", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [currentValset, sigs, crossChainAckPayload, relayerRouterAddress], __options);
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
	* setRouteToken
	*
	* @param { ArgumentTypes.AccountId } routeToken,
	* @returns { void }
	*/
	"setRouteToken" (
		routeToken: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setRouteToken", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [routeToken], __options);
	}

	/**
	* setIsendFee
	*
	* @param { (string | number | BN) } isendFee,
	* @returns { void }
	*/
	"setIsendFee" (
		isendFee: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setIsendFee", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [isendFee], __options);
	}

	/**
	* setVersion
	*
	* @param { (string | number | BN) } newVersion,
	* @returns { void }
	*/
	"setVersion" (
		newVersion: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setVersion", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [newVersion], __options);
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
	* setCode
	*
	* @param { Array<(number | string | BN)> } codeHash,
	* @returns { void }
	*/
	"setCode" (
		codeHash: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setCode", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [codeHash], __options);
	}

	/**
	* getOwner
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getOwner" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getOwner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(26, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getContractAddress
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getContractAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getContractAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(27, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getPauseValue
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getPauseValue" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPauseValue", [], __options, (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getSrcChainId
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getSrcChainId" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getSrcChainId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getSrcEventNonce
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getSrcEventNonce" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getSrcEventNonce", [], __options, (result) => { return handleReturnType(result, getTypeDescription(30, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getLastValsetNonce
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getLastValsetNonce" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getLastValsetNonce", [], __options, (result) => { return handleReturnType(result, getTypeDescription(30, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getLastValsetCheckpoint
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getLastValsetCheckpoint" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getLastValsetCheckpoint", [], __options, (result) => { return handleReturnType(result, getTypeDescription(27, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getNonceStatus
	*
	* @param { string } srcChainId,
	* @param { (string | number | BN) } requestIdentifier,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getNonceStatus" (
		srcChainId: string,
		requestIdentifier: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getNonceStatus", [srcChainId, requestIdentifier], __options, (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAckNonceStatus
	*
	* @param { (string | number | BN) } requestIdentifier,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getAckNonceStatus" (
		requestIdentifier: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAckNonceStatus", [requestIdentifier], __options, (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getISendDefaultFee
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getISendDefaultFee" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getISendDefaultFee", [], __options, (result) => { return handleReturnType(result, getTypeDescription(30, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRouteToken
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getRouteToken" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRouteToken", [], __options, (result) => { return handleReturnType(result, getTypeDescription(26, DATA_TYPE_DESCRIPTIONS)); });
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
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "hasRole", [role, account], __options, (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
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
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRoleAdmin", [role], __options, (result) => { return handleReturnType(result, getTypeDescription(31, DATA_TYPE_DESCRIPTIONS)); });
	}

}