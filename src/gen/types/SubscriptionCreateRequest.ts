export type SubscriptionCreateRequest = {
  /**
   * @type number
   */
  amount: number;
  /**
   * @type string, uuid
   */
  assetId: string;
  /**
   * @type string, uuid
   */
  counterpartyId: string;
};
