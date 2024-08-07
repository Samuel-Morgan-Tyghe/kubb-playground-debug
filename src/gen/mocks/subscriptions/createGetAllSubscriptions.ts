import { faker } from "@faker-js/faker";

import type {
  GetAllSubscriptions200,
  GetAllSubscriptionsQueryParams,
  GetAllSubscriptionsQueryResponse,
} from "../../types/subscriptions/GetAllSubscriptions";
import { createApiResponseSubscription } from "../createApiResponseSubscription";

export function createGetAllSubscriptionsQueryParams(): NonNullable<GetAllSubscriptionsQueryParams> {
  faker.seed([100]);

  return {
    assetId: faker.string.alpha(),
    counterpartyId: faker.string.alpha(),
  };
}

/**
 * @description OK
 */
export function createGetAllSubscriptions200(): NonNullable<GetAllSubscriptions200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseSubscription()]) as any;
}

/**
 * @description OK
 */
export function createGetAllSubscriptionsQueryResponse(): NonNullable<GetAllSubscriptionsQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseSubscription()]) as any;
}
