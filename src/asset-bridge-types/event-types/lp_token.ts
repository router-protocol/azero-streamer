import type {ReturnNumber} from "@dpowxconsensus/typechain-types";
import type * as ReturnTypes from '../types-returns/lp_token';

export interface Approval {
	owner: ReturnTypes.AccountId;
	spender: ReturnTypes.AccountId;
	amount: ReturnNumber;
}

export interface Transfer {
	from: ReturnTypes.AccountId | null;
	to: ReturnTypes.AccountId | null;
	value: ReturnNumber;
}

