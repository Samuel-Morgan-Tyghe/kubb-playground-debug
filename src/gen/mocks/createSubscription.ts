import { faker } from "@faker-js/faker";

import type { Subscription } from "../types/Subscription";

import { createSubscriptionStatus } from "./createSubscriptionStatus";

export function createSubscription(
  data: NonNullable<Partial<Subscription>> = {},
): NonNullable<Subscription> {
  faker.seed([100]);

  return {
    ...{
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      commitmentAmount: faker.number.float(),
      counterpartyId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      status: createSubscriptionStatus(),
    },
    ...data,
  };
}
