import { type SubscriptionStatus } from "./SubscriptionStatus";

export type SubscriptionUpdateRequest = {
  /**
   * @type number | undefined
   */
  amount?: number;
  /**
   * @type string | undefined, uuid
   */
  assetId?: string;
  /**
   * @type string | undefined, uuid
   */
  counterpartyId?: string;
  status?: SubscriptionStatus;
};
