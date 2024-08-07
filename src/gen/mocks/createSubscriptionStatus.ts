import { faker } from "@faker-js/faker";

import type { SubscriptionStatus } from "../types/SubscriptionStatus";

export function createSubscriptionStatus(): NonNullable<SubscriptionStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREATED",
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
  ]);
}
