import { type CounterpartyOwnerType } from "./CounterpartyOwnerType";
import { type CounterpartyStatus } from "./CounterpartyStatus";
import { type Currency } from "./Currency";

export type CounterpartyUpdateRequest = {
  currency?: Currency;
  /**
   * @type string | undefined
   */
  name?: string;
  /**
   * @type string | undefined, uuid
   */
  ownerId?: string;
  ownerType?: CounterpartyOwnerType;
  status?: CounterpartyStatus;
};
