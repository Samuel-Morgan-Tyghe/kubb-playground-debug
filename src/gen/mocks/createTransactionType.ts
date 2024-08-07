import { faker } from "@faker-js/faker";

import type { TransactionType } from "../types/TransactionType";

export function createTransactionType(): NonNullable<TransactionType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "INVESTMENT",
    "CAPITAL_CALL",
    "DISTRIBUTION",
  ]);
}
