/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@dpowxconsensus/typechain-types';
import { buildSubmittableExtrinsic } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/asset_bridge';
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
	 * iTransferToken
	 *
	 * @param { ArgumentTypes.TransferPayload } transferPayload,
	*/
	"iTransferToken" (
		transferPayload: ArgumentTypes.TransferPayload,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iTransferToken", [transferPayload], __options);
	}

	/**
	 * iTransferTokenWithInstruction
	 *
	 * @param { ArgumentTypes.TransferPayload } transferPayload,
	 * @param { (number | string | BN) } destGasLimit,
	 * @param { Array<(number | string | BN)> } instruction,
	*/
	"iTransferTokenWithInstruction" (
		transferPayload: ArgumentTypes.TransferPayload,
		destGasLimit: (number | string | BN),
		instruction: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iTransferTokenWithInstruction", [transferPayload, destGasLimit, instruction], __options);
	}

	/**
	 * stake
	 *
	 * @param { ArgumentTypes.AccountId } token,
	 * @param { ArgumentTypes.AccountId } recipient,
	 * @param { (string | number | BN) } amount,
	*/
	"stake" (
		token: ArgumentTypes.AccountId,
		recipient: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "stake", [token, recipient, amount], __options);
	}

	/**
	 * unstake
	 *
	 * @param { ArgumentTypes.AccountId } lpToken,
	 * @param { ArgumentTypes.AccountId } recipient,
	 * @param { (string | number | BN) } amount,
	*/
	"unstake" (
		lpToken: ArgumentTypes.AccountId,
		recipient: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "unstake", [lpToken, recipient, amount], __options);
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
	 * setDappMetadata
	 *
	 * @param { Array<(number | string | BN)> } feePayerAddress,
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setDappMetadata", [feePayerAddress], __options);
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
	 * setRouterChainId
	 *
	 * @param { string } routerChainId,
	*/
	"setRouterChainId" (
		routerChainId: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setRouterChainId", [routerChainId], __options);
	}

	/**
	 * setRouterBridgeContract
	 *
	 * @param { string } routerBridge,
	*/
	"setRouterBridgeContract" (
		routerBridge: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setRouterBridgeContract", [routerBridge], __options);
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
	 * setMinAmountToSwap
	 *
	 * @param { Array<ArgumentTypes.AccountId> } tokenAddresses,
	 * @param { Array<(string | number | BN)> } amounts,
	*/
	"setMinAmountToSwap" (
		tokenAddresses: Array<ArgumentTypes.AccountId>,
		amounts: Array<(string | number | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setMinAmountToSwap", [tokenAddresses, amounts], __options);
	}

	/**
	 * setIsTokenBurnable
	 *
	 * @param { Array<ArgumentTypes.AccountId> } tokenAddresses,
	 * @param { Array<boolean> } burnableStatus,
	*/
	"setIsTokenBurnable" (
		tokenAddresses: Array<ArgumentTypes.AccountId>,
		burnableStatus: Array<boolean>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setIsTokenBurnable", [tokenAddresses, burnableStatus], __options);
	}

	/**
	 * setTokenWhitelist
	 *
	 * @param { Array<ArgumentTypes.AccountId> } tokenAddresses,
	 * @param { Array<boolean> } shouldWhitelist,
	*/
	"setTokenWhitelist" (
		tokenAddresses: Array<ArgumentTypes.AccountId>,
		shouldWhitelist: Array<boolean>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setTokenWhitelist", [tokenAddresses, shouldWhitelist], __options);
	}

	/**
	 * setLiquidityPool
	 *
	 * @param { Array<ArgumentTypes.AccountId> } tokenAddresses,
	 * @param { Array<ArgumentTypes.AccountId> } lpAddresses,
	 * @param { Array<boolean> } shouldReset,
	*/
	"setLiquidityPool" (
		tokenAddresses: Array<ArgumentTypes.AccountId>,
		lpAddresses: Array<ArgumentTypes.AccountId>,
		shouldReset: Array<boolean>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setLiquidityPool", [tokenAddresses, lpAddresses, shouldReset], __options);
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
	 * getContractVer
	 *
	*/
	"getContractVer" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getContractVer", [], __options);
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
	 * getDepositNonce
	 *
	*/
	"getDepositNonce" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getDepositNonce", [], __options);
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
	 * getRouterBridgeContract
	 *
	*/
	"getRouterBridgeContract" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getRouterBridgeContract", [], __options);
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
	 * isBurnable
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"isBurnable" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "isBurnable", [token], __options);
	}

	/**
	 * getExecuteRecord
	 *
	 * @param { Array<(number | string | BN)> } srcChainId,
	 * @param { (string | number | BN) } depositNonce,
	*/
	"getExecuteRecord" (
		srcChainId: Array<(number | string | BN)>,
		depositNonce: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getExecuteRecord", [srcChainId, depositNonce], __options);
	}

	/**
	 * getExecuteRevertRecord
	 *
	 * @param { Array<(number | string | BN)> } dstChainId,
	 * @param { (string | number | BN) } depositNonce,
	*/
	"getExecuteRevertRecord" (
		dstChainId: Array<(number | string | BN)>,
		depositNonce: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getExecuteRevertRecord", [dstChainId, depositNonce], __options);
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
	 * getTokenToLp
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"getTokenToLp" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getTokenToLp", [token], __options);
	}

	/**
	 * getLpToToken
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"getLpToToken" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getLpToToken", [token], __options);
	}

	/**
	 * isBurnableToken
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"isBurnableToken" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "isBurnableToken", [token], __options);
	}

	/**
	 * isTokenWhitelisted
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"isTokenWhitelisted" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "isTokenWhitelisted", [token], __options);
	}

	/**
	 * getMinAmountToSwap
	 *
	 * @param { ArgumentTypes.AccountId } token,
	*/
	"getMinAmountToSwap" (
		token: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getMinAmountToSwap", [token], __options);
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
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDapp::iReceive", [requestSender, packet, srcChainId], __options);
	}

	/**
	 * iAck
	 *
	 * @param { (string | number | BN) } requestIdentifier,
	 * @param { boolean } execFlag,
	 * @param { Array<(number | string | BN)> } execData,
	*/
	"iAck" (
		requestIdentifier: (string | number | BN),
		execFlag: boolean,
		execData: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iDapp::iAck", [requestIdentifier, execFlag, execData], __options);
	}

}