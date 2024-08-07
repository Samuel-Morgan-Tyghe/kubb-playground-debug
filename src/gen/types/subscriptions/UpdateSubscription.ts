import type { ApiResponseSubscription } from "../ApiResponseSubscription";
import { type SubscriptionUpdateRequest } from "../SubscriptionUpdateRequest";

export type UpdateSubscriptionPathParams = {
  /**
   * @type string
   */
  subscriptionId: string;
};
/**
 * @description OK
 */
export type UpdateSubscription200 = ApiResponseSubscription;
export type UpdateSubscriptionMutationRequest = SubscriptionUpdateRequest;
/**
 * @description OK
 */
export type UpdateSubscriptionMutationResponse = ApiResponseSubscription;
export type UpdateSubscriptionMutation = {
  PathParams: UpdateSubscriptionPathParams;
  Request: UpdateSubscriptionMutationRequest;
  Response: UpdateSubscriptionMutationResponse;
};
