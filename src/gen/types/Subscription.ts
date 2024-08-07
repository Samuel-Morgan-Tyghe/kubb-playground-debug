import { type SubscriptionStatus } from "./SubscriptionStatus";

export type Subscription = {
  /**
   * @type string, uuid
   */
  assetId: string;
  /**
   * @type number
   */
  commitmentAmount: number;
  /**
   * @type string, uuid
   */
  counterpartyId: string;
  /**
   * @type string, uuid
   */
  id: string;
  status: SubscriptionStatus;
};
