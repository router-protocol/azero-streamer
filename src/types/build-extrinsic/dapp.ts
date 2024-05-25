/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@dpowxconsensus/typechain-types';
import { buildSubmittableExtrinsic } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/dapp';
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
	 * @param { (string | number | BN) } routeAmount,
	 * @param { Array<(number | string | BN)> } routeRecipient,
	 * @param { Array<(number | string | BN)> } destChainId,
	 * @param { Array<(number | string | BN)> } requestMetadata,
	 * @param { Array<(number | string | BN)> } requestPacket,
	*/
	"iSend" (
		routeAmount: (string | number | BN),
		routeRecipient: Array<(number | string | BN)>,
		destChainId: Array<(number | string | BN)>,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "iSend", [routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options);
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
	 * getPingedCnt
	 *
	 * @param { string } chainId,
	*/
	"getPingedCnt" (
		chainId: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getPingedCnt", [chainId], __options);
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
	 * getContractAddress
	 *
	*/
	"getContractAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getContractAddress", [], __options);
	}

	/**
	 * getGatewayContractAddress
	 *
	*/
	"getGatewayContractAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getGatewayContractAddress", [], __options);
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