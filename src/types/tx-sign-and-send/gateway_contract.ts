/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import { txSignAndSend } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/gateway_contract';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/gateway_contract.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* updateValset
	*
	* @param { ArgumentTypes.ValsetArgs } newValset,
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	*/
	"updateValset" (
		newValset: ArgumentTypes.ValsetArgs,
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "updateValset", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [newValset, currentValset, sigs], __options);
	}

	/**
	* setDappMetadata
	*
	* @param { Array<(number | string | BN)> } feePayerAddress,
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
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
	* @param { Array<(number | string | BN)> } routeRecipient,
	* @param { Array<(number | string | BN)> } destChainId,
	* @param { Array<(number | string | BN)> } requestMetadata,
	* @param { Array<(number | string | BN)> } requestPacket,
	*/
	"iSend" (
		version: (string | number | BN),
		routeAmount: (string | number | BN),
		routeRecipient: Array<(number | string | BN)>,
		destChainId: Array<(number | string | BN)>,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
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
	* @param { Array<(number | string | BN)> } relayerRouterAddress,
	*/
	"iReceive" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		requestPayload: ArgumentTypes.RequestPayload,
		relayerRouterAddress: Array<(number | string | BN)>,
		__options ? : GasLimit,
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
	* @param { Array<(number | string | BN)> } relayerRouterAddress,
	*/
	"iAck" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		crossChainAckPayload: ArgumentTypes.CrossChainAckPayload,
		relayerRouterAddress: Array<(number | string | BN)>,
		__options ? : GasLimit,
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
	*/
	"rescue" (
		token: ArgumentTypes.AccountId,
		recipient: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "rescue", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [token, recipient, amount], __options);
	}

	/**
	* getPauseValue
	*
	*/
	"getPauseValue" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getPauseValue", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getSrcChainId
	*
	*/
	"getSrcChainId" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getSrcChainId", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getSrcEventNonce
	*
	*/
	"getSrcEventNonce" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getSrcEventNonce", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getLastValsetNonce
	*
	*/
	"getLastValsetNonce" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getLastValsetNonce", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getLastValsetCheckpoint
	*
	*/
	"getLastValsetCheckpoint" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getLastValsetCheckpoint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getNonceStatus
	*
	* @param { string } srcChainId,
	* @param { (string | number | BN) } requestIdentifier,
	*/
	"getNonceStatus" (
		srcChainId: string,
		requestIdentifier: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getNonceStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [srcChainId, requestIdentifier], __options);
	}

	/**
	* getAckNonceStatus
	*
	* @param { (string | number | BN) } requestIdentifier,
	*/
	"getAckNonceStatus" (
		requestIdentifier: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getAckNonceStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [requestIdentifier], __options);
	}

	/**
	* getISendDefaultFee
	*
	*/
	"getISendDefaultFee" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getISendDefaultFee", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getRouteToken
	*
	*/
	"getRouteToken" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getRouteToken", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* hasRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	*/
	"hasRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "hasRole", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [role, account], __options);
	}

	/**
	* getRoleAdmin
	*
	* @param { Array<(number | string | BN)> } role,
	*/
	"getRoleAdmin" (
		role: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getRoleAdmin", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [role], __options);
	}

	/**
	* getContractVer
	*
	*/
	"getContractVer" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getContractVer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* getVersion
	*
	*/
	"getVersion" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getVersion", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* setRouteToken
	*
	* @param { ArgumentTypes.AccountId } routeToken,
	*/
	"setRouteToken" (
		routeToken: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setRouteToken", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [routeToken], __options);
	}

	/**
	* setIsendFee
	*
	* @param { (string | number | BN) } isendFee,
	*/
	"setIsendFee" (
		isendFee: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setIsendFee", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [isendFee], __options);
	}

	/**
	* setVersion
	*
	* @param { (string | number | BN) } newVersion,
	*/
	"setVersion" (
		newVersion: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setVersion", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [newVersion], __options);
	}

	/**
	* pause
	*
	*/
	"pause" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pause", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* unpause
	*
	*/
	"unpause" (
		__options ? : GasLimit,
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
	*/
	"grantRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options ? : GasLimit,
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
	*/
	"revokeRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "revokeRole", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [role, account], __options);
	}

	/**
	* setCodeHash
	*
	* @param { ArgumentTypes.Hash } codeHash,
	*/
	"setCodeHash" (
		codeHash: ArgumentTypes.Hash,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setCodeHash", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [codeHash], __options);
	}

}