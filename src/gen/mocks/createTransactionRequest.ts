import { faker } from "@faker-js/faker";

import type { TransactionRequest } from "../types/TransactionRequest";

import { createMoney } from "./createMoney";

export function createTransactionRequest(
  data: NonNullable<Partial<TransactionRequest>> = {},
): NonNullable<TransactionRequest> {
  faker.seed([100]);

  return {
    ...{
      amount: createMoney(),
      bankAccountId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      fromAccountId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      groupId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      limitedPartnerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      toAccountId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      transactionType: faker.helpers.arrayElement<any>([
        "INVESTMENT",
        "DEPOSIT",
        "TRANSFER",
        "WITHDRAWAL",
        "FEE",
        "INTEREST",
      ]),
      validTransfer: faker.datatype.boolean(),
      validWithdrawal: faker.datatype.boolean(),
    },
    ...data,
  };
}
