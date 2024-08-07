import { faker } from "@faker-js/faker";

import type { CapitalCallStatus } from "../types/CapitalCallStatus";

export function createCapitalCallStatus(): NonNullable<CapitalCallStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREATED",
    "PENDING",
    "ACTIVE",
    "COMPLETED",
  ]);
}
