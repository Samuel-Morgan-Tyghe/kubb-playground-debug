import type { ApiResponseSubscription } from "../ApiResponseSubscription";

export type GetAllSubscriptionsQueryParams = {
  /**
   * @type string | undefined
   */
  assetId?: string;
  /**
   * @type string | undefined
   */
  counterpartyId?: string;
};
/**
 * @description OK
 */
export type GetAllSubscriptions200 = ApiResponseSubscription[];
/**
 * @description OK
 */
export type GetAllSubscriptionsQueryResponse = ApiResponseSubscription[];
export type GetAllSubscriptionsQuery = {
  QueryParams: GetAllSubscriptionsQueryParams;
  Response: GetAllSubscriptionsQueryResponse;
};
