import { faker } from "@faker-js/faker";

import type { CounterpartyStatus } from "../types/CounterpartyStatus";

export function createCounterpartyStatus(): NonNullable<CounterpartyStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREATED",
    "IN_REVIEW",
    "ACTIVE",
    "BLOCKED",
    "CLOSED",
    "DELETED",
  ]);
}
