import { faker } from "@faker-js/faker";

import type {
  GetSubscriptionById200,
  GetSubscriptionByIdPathParams,
  GetSubscriptionByIdQueryResponse,
} from "../../types/subscriptions/GetSubscriptionById";
import { createApiResponseSubscription } from "../createApiResponseSubscription";

export function createGetSubscriptionByIdPathParams(): NonNullable<GetSubscriptionByIdPathParams> {
  faker.seed([100]);

  return { subscriptionId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetSubscriptionById200(): NonNullable<GetSubscriptionById200> {
  faker.seed([100]);

  return createApiResponseSubscription();
}

/**
 * @description OK
 */
export function createGetSubscriptionByIdQueryResponse(): NonNullable<GetSubscriptionByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseSubscription();
}
