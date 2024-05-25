/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@dpowxconsensus/typechain-types';
import type { QueryReturnType } from '@dpowxconsensus/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@dpowxconsensus/typechain-types';
import type * as ArgumentTypes from '../types-arguments/gateway_contract';
import type * as ReturnTypes from '../types-returns/gateway_contract';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@dpowxconsensus/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/gateway_contract.json';


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
	* updateValset
	*
	* @param { ArgumentTypes.ValsetArgs } newValset,
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"updateValset" (
		newValset: ArgumentTypes.ValsetArgs,
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "updateValset", [newValset, currentValset, sigs], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setDappMetadata
	*
	* @param { Array<(number | string | BN)> } feePayerAddress,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"setDappMetadata" (
		feePayerAddress: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setDappMetadata", [feePayerAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
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
	* @returns { Result<Result<ReturnNumber, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"iSend" (
		version: (string | number | BN),
		routeAmount: (string | number | BN),
		routeRecipient: Array<(number | string | BN)>,
		destChainId: Array<(number | string | BN)>,
		requestMetadata: Array<(number | string | BN)>,
		requestPacket: Array<(number | string | BN)>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<ReturnNumber, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iSend", [version, routeAmount, routeRecipient, destChainId, requestMetadata, requestPacket], __options , (result) => { return handleReturnType(result, getTypeDescription(35, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iReceive
	*
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @param { ArgumentTypes.RequestPayload } requestPayload,
	* @param { Array<(number | string | BN)> } relayerRouterAddress,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"iReceive" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		requestPayload: ArgumentTypes.RequestPayload,
		relayerRouterAddress: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iReceive", [currentValset, sigs, requestPayload, relayerRouterAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* iAck
	*
	* @param { ArgumentTypes.ValsetArgs } currentValset,
	* @param { Array<Array<(number | string | BN)>> } sigs,
	* @param { ArgumentTypes.CrossChainAckPayload } crossChainAckPayload,
	* @param { Array<(number | string | BN)> } relayerRouterAddress,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"iAck" (
		currentValset: ArgumentTypes.ValsetArgs,
		sigs: Array<Array<(number | string | BN)>>,
		crossChainAckPayload: ArgumentTypes.CrossChainAckPayload,
		relayerRouterAddress: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "iAck", [currentValset, sigs, crossChainAckPayload, relayerRouterAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* rescue
	*
	* @param { ArgumentTypes.AccountId } token,
	* @param { ArgumentTypes.AccountId } recipient,
	* @param { (string | number | BN) } amount,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"rescue" (
		token: ArgumentTypes.AccountId,
		recipient: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "rescue", [token, recipient, amount], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getPauseValue
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getPauseValue" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPauseValue", [], __options , (result) => { return handleReturnType(result, getTypeDescription(39, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getSrcChainId
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getSrcChainId" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getSrcChainId", [], __options , (result) => { return handleReturnType(result, getTypeDescription(40, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getSrcEventNonce
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getSrcEventNonce" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getSrcEventNonce", [], __options , (result) => { return handleReturnType(result, getTypeDescription(41, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getLastValsetNonce
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getLastValsetNonce" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getLastValsetNonce", [], __options , (result) => { return handleReturnType(result, getTypeDescription(41, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getLastValsetCheckpoint
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getLastValsetCheckpoint" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getLastValsetCheckpoint", [], __options , (result) => { return handleReturnType(result, getTypeDescription(42, DATA_TYPE_DESCRIPTIONS)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getNonceStatus", [srcChainId, requestIdentifier], __options , (result) => { return handleReturnType(result, getTypeDescription(39, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAckNonceStatus
	*
	* @param { (string | number | BN) } requestIdentifier,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getAckNonceStatus" (
		requestIdentifier: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAckNonceStatus", [requestIdentifier], __options , (result) => { return handleReturnType(result, getTypeDescription(39, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getISendDefaultFee
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getISendDefaultFee" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getISendDefaultFee", [], __options , (result) => { return handleReturnType(result, getTypeDescription(41, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRouteToken
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getRouteToken" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRouteToken", [], __options , (result) => { return handleReturnType(result, getTypeDescription(43, DATA_TYPE_DESCRIPTIONS)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "hasRole", [role, account], __options , (result) => { return handleReturnType(result, getTypeDescription(39, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getRoleAdmin
	*
	* @param { Array<(number | string | BN)> } role,
	* @returns { Result<Result<Array<number>, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"getRoleAdmin" (
		role: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<Array<number>, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getRoleAdmin", [role], __options , (result) => { return handleReturnType(result, getTypeDescription(44, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getContractVer
	*
	* @returns { Result<[string, string], ReturnTypes.LangError> }
	*/
	"getContractVer" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<[string, string], ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getContractVer", [], __options , (result) => { return handleReturnType(result, getTypeDescription(46, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getVersion
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getVersion" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getVersion", [], __options , (result) => { return handleReturnType(result, getTypeDescription(41, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setRouteToken
	*
	* @param { ArgumentTypes.AccountId } routeToken,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"setRouteToken" (
		routeToken: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setRouteToken", [routeToken], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setIsendFee
	*
	* @param { (string | number | BN) } isendFee,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"setIsendFee" (
		isendFee: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setIsendFee", [isendFee], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setVersion
	*
	* @param { (string | number | BN) } newVersion,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"setVersion" (
		newVersion: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setVersion", [newVersion], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* pause
	*
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"pause" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "pause", [], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* unpause
	*
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"unpause" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "unpause", [], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* grantRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"grantRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "grantRole", [role, account], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* revokeRole
	*
	* @param { Array<(number | string | BN)> } role,
	* @param { ArgumentTypes.AccountId } account,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"revokeRole" (
		role: Array<(number | string | BN)>,
		account: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "revokeRole", [role, account], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setCodeHash
	*
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> }
	*/
	"setCodeHash" (
		codeHash: ArgumentTypes.Hash,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.GatewayError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setCodeHash", [codeHash], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

}