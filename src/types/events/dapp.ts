import type * as EventTypes from '../event-types/dapp';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/dapp.json';
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

	public subscribeOnISendEventEvent(callback : (event : EventTypes.ISendEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ISendEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ISendEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ISendEvent');
	}

	public subscribeOnIReceiveEventEvent(callback : (event : EventTypes.IReceiveEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('IReceiveEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.IReceiveEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'IReceiveEvent');
	}

	public subscribeOnIAckEventEvent(callback : (event : EventTypes.IAckEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('IAckEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.IAckEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'IAckEvent');
	}

	public subscribeOnSetDappMetadataEventEvent(callback : (event : EventTypes.SetDappMetadataEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('SetDappMetadataEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.SetDappMetadataEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'SetDappMetadataEvent');
	}

	public subscribeOnValsetUpdatedEventEvent(callback : (event : EventTypes.ValsetUpdatedEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ValsetUpdatedEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ValsetUpdatedEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ValsetUpdatedEvent');
	}

	public subscribeOnBridgeFeeUpdatedEventEvent(callback : (event : EventTypes.BridgeFeeUpdatedEvent) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('BridgeFeeUpdatedEvent', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.BridgeFeeUpdatedEvent);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'BridgeFeeUpdatedEvent');
	}

	public subscribeOnPausedEvent(callback : (event : EventTypes.Paused) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Paused', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Paused);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Paused');
	}

	public subscribeOnUnpausedEvent(callback : (event : EventTypes.Unpaused) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Unpaused', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Unpaused);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Unpaused');
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