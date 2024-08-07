import { faker } from "@faker-js/faker";

import type { TransactionUpdateRequest } from "../types/TransactionUpdateRequest";

import { createMoney } from "./createMoney";
import { createTransactionStatus } from "./createTransactionStatus";
import { createTransactionType } from "./createTransactionType";

export function createTransactionUpdateRequest(
  data: NonNullable<Partial<TransactionUpdateRequest>> = {},
): NonNullable<TransactionUpdateRequest> {
  faker.seed([100]);

  return {
    ...{
      amount: createMoney(),
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      description: faker.string.alpha(),
      fromCounterpartyId: faker.helpers.arrayElement<any>([
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
