import { faker } from "@faker-js/faker";

import type { CapitalCallType } from "../types/CapitalCallType";

export function createCapitalCallType(): NonNullable<CapitalCallType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CAPITAL_CALL",
    "DISTRIBUTION",
    "SUBSCRIPTION",
  ]);
}
