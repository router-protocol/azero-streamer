/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@dpowxconsensus/typechain-types';
import { buildSubmittableExtrinsic } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/gateway_contract';
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "updateValset", [newValset, currentValset, sigs], __options);
	}

	/**
	 * setDappMetadata
	 *
	 * @param { Array<(number | string | BN)> } feePayerAddress,
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setDappMetadata", [feePayerAddress], __options);
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
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iSend", [version, routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iReceive", [currentValset, sigs, requestPayload, relayerRouterAddress], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iAck", [currentValset, sigs, crossChainAckPayload, relayerRouterAddress], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "rescue", [token, recipient, amount], __options);
	}

	/**
	 * getPauseValue
	 *
	*/
	"getPauseValue" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getPauseValue", [], __options);
	}

	/**
	 * getSrcChainId
	 *
	*/
	"getSrcChainId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getSrcChainId", [], __options);
	}

	/**
	 * getSrcEventNonce
	 *
	*/
	"getSrcEventNonce" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getSrcEventNonce", [], __options);
	}

	/**
	 * getLastValsetNonce
	 *
	*/
	"getLastValsetNonce" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getLastValsetNonce", [], __options);
	}

	/**
	 * getLastValsetCheckpoint
	 *
	*/
	"getLastValsetCheckpoint" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getLastValsetCheckpoint", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getNonceStatus", [srcChainId, requestIdentifier], __options);
	}

	/**
	 * getAckNonceStatus
	 *
	 * @param { (string | number | BN) } requestIdentifier,
	*/
	"getAckNonceStatus" (
		requestIdentifier: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAckNonceStatus", [requestIdentifier], __options);
	}

	/**
	 * getISendDefaultFee
	 *
	*/
	"getISendDefaultFee" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getISendDefaultFee", [], __options);
	}

	/**
	 * getRouteToken
	 *
	*/
	"getRouteToken" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getRouteToken", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "hasRole", [role, account], __options);
	}

	/**
	 * getRoleAdmin
	 *
	 * @param { Array<(number | string | BN)> } role,
	*/
	"getRoleAdmin" (
		role: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getRoleAdmin", [role], __options);
	}

	/**
	 * getContractVer
	 *
	*/
	"getContractVer" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getContractVer", [], __options);
	}

	/**
	 * getVersion
	 *
	*/
	"getVersion" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getVersion", [], __options);
	}

	/**
	 * setRouteToken
	 *
	 * @param { ArgumentTypes.AccountId } routeToken,
	*/
	"setRouteToken" (
		routeToken: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setRouteToken", [routeToken], __options);
	}

	/**
	 * setIsendFee
	 *
	 * @param { (string | number | BN) } isendFee,
	*/
	"setIsendFee" (
		isendFee: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setIsendFee", [isendFee], __options);
	}

	/**
	 * setVersion
	 *
	 * @param { (string | number | BN) } newVersion,
	*/
	"setVersion" (
		newVersion: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setVersion", [newVersion], __options);
	}

	/**
	 * pause
	 *
	*/
	"pause" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pause", [], __options);
	}

	/**
	 * unpause
	 *
	*/
	"unpause" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "unpause", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "grantRole", [role, account], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "revokeRole", [role, account], __options);
	}

	/**
	 * setCodeHash
	 *
	 * @param { ArgumentTypes.Hash } codeHash,
	*/
	"setCodeHash" (
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setCodeHash", [codeHash], __options);
	}

}