import type { ApiResponseSubscription } from "../ApiResponseSubscription";

export type GetSubscriptionByIdPathParams = {
  /**
   * @type string
   */
  subscriptionId: string;
};
/**
 * @description OK
 */
export type GetSubscriptionById200 = ApiResponseSubscription;
/**
 * @description OK
 */
export type GetSubscriptionByIdQueryResponse = ApiResponseSubscription;
export type GetSubscriptionByIdQuery = {
  PathParams: GetSubscriptionByIdPathParams;
  Response: GetSubscriptionByIdQueryResponse;
};
