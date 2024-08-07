import { type CounterpartyOwnerType } from "./CounterpartyOwnerType";

export type CounterpartyCreateRequest = {
  /**
   * @type string
   */
  currency: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string, uuid
   */
  ownerId: string;
  ownerType: CounterpartyOwnerType;
};
