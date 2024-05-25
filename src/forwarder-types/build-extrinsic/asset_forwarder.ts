/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@dpowxconsensus/typechain-types';
import { buildSubmittableExtrinsic } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/asset_forwarder';
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
	 * iDepositInfoUpdate
	 *
	 * @param { ArgumentTypes.AccountId } srcToken,
	 * @param { (string | number | BN) } feeAmount,
	 * @param { (string | number | BN) } depositId,
	 * @param { boolean } initiateWithdrawal,
	*/
	"iDepositInfoUpdate" (
		srcToken: ArgumentTypes.AccountId,
		feeAmount: (string | number | BN),
		depositId: (string | number | BN),
		initiateWithdrawal: boolean,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDepositInfoUpdate", [srcToken, feeAmount, depositId, initiateWithdrawal], __options);
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
	 * @param { Array<(number | string | BN)> } message,
	*/
	"iDepositMessage" (
		depositData: ArgumentTypes.DepositData,
		dstToken: Array<(number | string | BN)>,
		recipient: Array<(number | string | BN)>,
		message: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDepositMessage", [depositData, dstToken, recipient, message], __options);
	}

	/**
	 * iRelay
	 *
	 * @param { ArgumentTypes.RelayData } relayData,
	 * @param { string } forwarderRouterAddress,
	*/
	"iRelay" (
		relayData: ArgumentTypes.RelayData,
		forwarderRouterAddress: string,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iRelay", [relayData, forwarderRouterAddress], __options);
	}

	/**
	 * iRelayMessage
	 *
	 * @param { ArgumentTypes.RelayDataMessage } relayData,
	 * @param { string } forwarderRouterAddress,
	*/
	"iRelayMessage" (
		relayData: ArgumentTypes.RelayDataMessage,
		forwarderRouterAddress: string,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iRelayMessage", [relayData, forwarderRouterAddress], __options);
	}

	/**
	 * iReceive
	 *
	 * @param { Array<(number | string | BN)> } requestSender,
	 * @param { Array<(number | string | BN)> } packet,
	 * @param { Array<(number | string | BN)> } srcChainId,
	*/
	"iReceive" (
		requestSender: Array<(number | string | BN)>,
		packet: Array<(number | string | BN)>,
		srcChainId: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iReceive", [requestSender, packet, srcChainId], __options);
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
	 * setRouterMiddlewareBase
	 *
	 * @param { string } routerMiddlewareBase,
	*/
	"setRouterMiddlewareBase" (
		routerMiddlewareBase: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setRouterMiddlewareBase", [routerMiddlewareBase], __options);
	}

	/**
	 * setChainId
	 *
	 * @param { string } chainId,
	*/
	"setChainId" (
		chainId: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setChainId", [chainId], __options);
	}

	/**
	 * setGateway
	 *
	 * @param { ArgumentTypes.AccountId } gateway,
	*/
	"setGateway" (
		gateway: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setGateway", [gateway], __options);
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
	 * getChainId
	 *
	*/
	"getChainId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getChainId", [], __options);
	}

	/**
	 * getRouterChainId
	 *
	*/
	"getRouterChainId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getRouterChainId", [], __options);
	}

	/**
	 * getDepositNonce
	 *
	*/
	"getDepositNonce" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getDepositNonce", [], __options);
	}

	/**
	 * getExecuteRecord
	 *
	 * @param { Array<(number | string | BN)> } messageHash,
	*/
	"getExecuteRecord" (
		messageHash: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getExecuteRecord", [messageHash], __options);
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
	 * getRouterMiddlewareBase
	 *
	*/
	"getRouterMiddlewareBase" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getRouterMiddlewareBase", [], __options);
	}

	/**
	 * getGateway
	 *
	*/
	"getGateway" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getGateway", [], __options);
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

}