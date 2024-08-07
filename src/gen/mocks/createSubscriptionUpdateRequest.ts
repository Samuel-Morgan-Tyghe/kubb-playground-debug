import { faker } from "@faker-js/faker";

import type { SubscriptionUpdateRequest } from "../types/SubscriptionUpdateRequest";

import { createSubscriptionStatus } from "./createSubscriptionStatus";

export function createSubscriptionUpdateRequest(
  data: NonNullable<Partial<SubscriptionUpdateRequest>> = {},
): NonNullable<SubscriptionUpdateRequest> {
  faker.seed([100]);

  return {
    ...{
      amount: faker.number.float(),
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      counterpartyId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      status: createSubscriptionStatus(),
    },
    ...data,
  };
}
