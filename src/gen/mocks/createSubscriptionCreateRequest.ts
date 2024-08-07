import { faker } from "@faker-js/faker";

import type { SubscriptionCreateRequest } from "../types/SubscriptionCreateRequest";

export function createSubscriptionCreateRequest(
  data: NonNullable<Partial<SubscriptionCreateRequest>> = {},
): NonNullable<SubscriptionCreateRequest> {
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
    },
    ...data,
  };
}
