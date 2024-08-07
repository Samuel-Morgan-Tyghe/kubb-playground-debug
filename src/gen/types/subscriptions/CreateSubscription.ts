import type { ApiResponseSubscription } from "../ApiResponseSubscription";
import { type SubscriptionCreateRequest } from "../SubscriptionCreateRequest";

/**
 * @description OK
 */
export type CreateSubscription200 = ApiResponseSubscription;
export type CreateSubscriptionMutationRequest = SubscriptionCreateRequest;
/**
 * @description OK
 */
export type CreateSubscriptionMutationResponse = ApiResponseSubscription;
export type CreateSubscriptionMutation = {
  Request: CreateSubscriptionMutationRequest;
  Response: CreateSubscriptionMutationResponse;
};
