import { faker } from "@faker-js/faker";

import type {
  UpdateSubscription200,
  UpdateSubscriptionMutationRequest,
  UpdateSubscriptionMutationResponse,
  UpdateSubscriptionPathParams,
} from "../../types/subscriptions/UpdateSubscription";
import { createApiResponseSubscription } from "../createApiResponseSubscription";
import { createSubscriptionUpdateRequest } from "../createSubscriptionUpdateRequest";

export function createUpdateSubscriptionPathParams(): NonNullable<UpdateSubscriptionPathParams> {
  faker.seed([100]);

  return { subscriptionId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateSubscription200(): NonNullable<UpdateSubscription200> {
  faker.seed([100]);

  return createApiResponseSubscription();
}

export function createUpdateSubscriptionMutationRequest(): NonNullable<UpdateSubscriptionMutationRequest> {
  faker.seed([100]);

  return createSubscriptionUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateSubscriptionMutationResponse(): NonNullable<UpdateSubscriptionMutationResponse> {
  faker.seed([100]);

  return createApiResponseSubscription();
}
