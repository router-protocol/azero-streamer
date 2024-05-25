import type * as EventTypes from '../event-types/message_handler';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/message_handler.json';
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@dpowxconsensus/typechain-types";

export default class EventsClass {
	readonly __nativeContract : ContractPromise;
	readonly __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnFundsDepositedEvent(callback : (event : EventTypes.FundsDeposited) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('FundsDeposited', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.FundsDeposited);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'FundsDeposited');
	}

	public subscribeOnFundsDepositedWithMessageEvent(callback : (event : EventTypes.FundsDepositedWithMessage) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('FundsDepositedWithMessage', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.FundsDepositedWithMessage);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'FundsDepositedWithMessage');
	}

	public subscribeOnFundsPaidEvent(callback : (event : EventTypes.FundsPaid) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('FundsPaid', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.FundsPaid);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'FundsPaid');
	}

	public subscribeOnFundsPaidWithMessageEvent(callback : (event : EventTypes.FundsPaidWithMessage) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('FundsPaidWithMessage', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.FundsPaidWithMessage);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'FundsPaidWithMessage');
	}

	public subscribeOnDepositInfoUpdateEvent(callback : (event : EventTypes.DepositInfoUpdate) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('DepositInfoUpdate', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.DepositInfoUpdate);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'DepositInfoUpdate');
	}

	public subscribeOnApprovalEvent(callback : (event : EventTypes.Approval) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Approval', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Approval);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Approval');
	}

	public subscribeOnTransferEvent(callback : (event : EventTypes.Transfer) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Transfer', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Transfer);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Transfer');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}