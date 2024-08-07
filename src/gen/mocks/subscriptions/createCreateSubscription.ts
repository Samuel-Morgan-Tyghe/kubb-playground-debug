import { faker } from "@faker-js/faker";

import type {
  CreateSubscription200,
  CreateSubscriptionMutationRequest,
  CreateSubscriptionMutationResponse,
} from "../../types/subscriptions/CreateSubscription";
import { createApiResponseSubscription } from "../createApiResponseSubscription";
import { createSubscriptionCreateRequest } from "../createSubscriptionCreateRequest";

/**
 * @description OK
 */
export function createCreateSubscription200(): NonNullable<CreateSubscription200> {
  faker.seed([100]);

  return createApiResponseSubscription();
}

export function createCreateSubscriptionMutationRequest(): NonNullable<CreateSubscriptionMutationRequest> {
  faker.seed([100]);

  return createSubscriptionCreateRequest();
}

/**
 * @description OK
 */
export function createCreateSubscriptionMutationResponse(): NonNullable<CreateSubscriptionMutationResponse> {
  faker.seed([100]);

  return createApiResponseSubscription();
}
