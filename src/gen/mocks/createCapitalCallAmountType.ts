import { faker } from "@faker-js/faker";

import type { CapitalCallAmountType } from "../types/CapitalCallAmountType";

export function createCapitalCallAmountType(): NonNullable<CapitalCallAmountType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["PERCENTAGE", "AMOUNT"]);
}
