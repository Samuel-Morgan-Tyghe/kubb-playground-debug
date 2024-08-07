import { type CounterpartyOwnerType } from "./CounterpartyOwnerType";
import { type CounterpartyStatus } from "./CounterpartyStatus";
import { type Currency } from "./Currency";

export type Counterparty = {
  currency: Currency;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string, uuid
   */
  ownerId: string;
  ownerType?: CounterpartyOwnerType;
  status: CounterpartyStatus;
};
