import { faker } from "@faker-js/faker";

import type { TransactionStatus } from "../types/TransactionStatus";

export function createTransactionStatus(): NonNullable<TransactionStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREATED",
    "PENDING",
    "INITIATED",
    "CANCELLED",
    "COMPLETED",
  ]);
}
