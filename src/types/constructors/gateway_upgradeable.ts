import {CodePromise} from "@polkadot/api-contract";
import type {KeyringPair} from "@polkadot/keyring/types";
import type {ApiPromise} from "@polkadot/api";
import {_genValidGasLimitAndValue, _signAndSend, SignAndSendSuccessResponse} from "@dpowxconsensus/typechain-types";
import type {ConstructorOptions} from "@dpowxconsensus/typechain-types";
import type {WeightV2} from "@polkadot/types/interfaces";
import type * as ArgumentTypes from '../types-arguments/gateway_upgradeable';
import { ContractFile } from '../contract-info/gateway_upgradeable';
import type BN from 'bn.js';

export default class Constructors {
	readonly nativeAPI: ApiPromise;
	readonly signer: KeyringPair;

	constructor(
		nativeAPI: ApiPromise,
		signer: KeyringPair,
	) {
		this.nativeAPI = nativeAPI;
		this.signer = signer;
	}

	/**
	* new
	*
	* @param { string } chainId,
	* @param { Array<Array<(number | string | BN)>> } validators,
	* @param { Array<(number | string | BN)> } powers,
	* @param { (string | number | BN) } valsetNonce,
	* @param { ArgumentTypes.AccountId } routeToken,
	* @param { (string | number | BN) } isendFee,
	*/
   	async "new" (
		chainId: string,
		validators: Array<Array<(number | string | BN)>>,
		powers: Array<(number | string | BN)>,
		valsetNonce: (string | number | BN),
		routeToken: ArgumentTypes.AccountId,
		isendFee: (string | number | BN),
		__options ? : ConstructorOptions,
   	) {
   		const __contract = JSON.parse(ContractFile);
		const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
		const gasLimit = (await _genValidGasLimitAndValue(this.nativeAPI, __options)).gasLimit as WeightV2;

		const storageDepositLimit = __options?.storageDepositLimit;
			const tx = code.tx["new"]!({ gasLimit, storageDepositLimit, value: __options?.value }, chainId, validators, powers, valsetNonce, routeToken, isendFee);
			let response;

			try {
				response = await _signAndSend(this.nativeAPI.registry, tx, this.signer, (event: any) => event);
			}
			catch (error) {
				console.log(error);
			}

		return {
			result: response as SignAndSendSuccessResponse,
			// @ts-ignore
			address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
		};
	}
}