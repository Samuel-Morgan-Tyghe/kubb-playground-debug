import { faker } from "@faker-js/faker";

import type { Transaction } from "../types/Transaction";

import { createMoney } from "./createMoney";
import { createTransactionStatus } from "./createTransactionStatus";
import { createTransactionType } from "./createTransactionType";

export function createTransaction(
  data: NonNullable<Partial<Transaction>> = {},
): NonNullable<Transaction> {
  faker.seed([100]);

  return {
    ...{
      amount: createMoney(),
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      description: faker.string.alpha(),
      externalRef: faker.string.alpha(),
      fromCounterpartyId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      groupId: faker.string.alpha(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      postedAt: faker.date.anytime().toISOString(),
      status: createTransactionStatus(),
      toCounterpartyId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      type: createTransactionType(),
    },
    ...data,
  };
}
