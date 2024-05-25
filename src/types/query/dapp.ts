/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/dapp';
import type * as ReturnTypes from '../types-returns/dapp';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/dapp.json';


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
	* setDappMetadata
	*
	* @param { Array<(number | string | BN)> } feePayerAddress,
	* @returns { Result<Result<null, ReturnTypes.DappError>, ReturnTypes.LangError> }
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.DappError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setDappMetadata", [feePayerAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(17, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iSend
	*
	* @param { (string | number | BN) } routeAmount,
	* @param { Array<(number | string | BN)> } routeRecipient,
	* @param { Array<(number | string | BN)> } destChainId,
	* @param { Array<(number | string | BN)> } requestMetadata,
	* @param { Array<(number | string | BN)> } requestPacket,
	* @returns { Result<Result<ReturnNumber, ReturnTypes.DappError>, ReturnTypes.LangError> }
	*/
	"iSend" (
		routeAmount: (string | number | BN),
		routeRecipient: Array<(number | string | BN)>,
		destChainId: Array<(number | string | BN)>,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<ReturnNumber, ReturnTypes.DappError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iSend", [routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options , (result) => { return handleReturnType(result, getTypeDescription(20, DATA_TYPE_DESCRIPTIONS)); });
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
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setCode", [codeHash], __options , (result) => { return handleReturnType(result, getTypeDescription(14, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getPingedCnt
	*
	* @param { string } chainId,
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getPingedCnt" (
		chainId: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPingedCnt", [chainId], __options , (result) => { return handleReturnType(result, getTypeDescription(23, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getChainId
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getChainId" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getChainId", [], __options , (result) => { return handleReturnType(result, getTypeDescription(24, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getContractAddress
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getContractAddress" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getContractAddress", [], __options , (result) => { return handleReturnType(result, getTypeDescription(25, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getGatewayContractAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getGatewayContractAddress" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getGatewayContractAddress", [], __options , (result) => { return handleReturnType(result, getTypeDescription(26, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iReceive
	*
	* @param { Array<(number | string | BN)> } requestSender,
	* @param { Array<(number | string | BN)> } packet,
	* @param { Array<(number | string | BN)> } srcChainId,
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"iReceive" (
		requestSender: Array<(number | string | BN)>,
		packet: Array<(number | string | BN)>,
		srcChainId: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iDapp::iReceive", [requestSender, packet, srcChainId], __options , (result) => { return handleReturnType(result, getTypeDescription(27, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iAck
	*
	* @param { (string | number | BN) } requestIdentifier,
	* @param { boolean } execFlag,
	* @param { Array<(number | string | BN)> } execData,
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"iAck" (
		requestIdentifier: (string | number | BN),
		execFlag: boolean,
		execData: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iDapp::iAck", [requestIdentifier, execFlag, execData], __options , (result) => { return handleReturnType(result, getTypeDescription(27, DATA_TYPE_DESCRIPTIONS)); });
	}

}