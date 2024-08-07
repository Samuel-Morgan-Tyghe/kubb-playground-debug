import { faker } from "@faker-js/faker";

import type {
  GetTransactions200,
  GetTransactionsQueryParams,
  GetTransactionsQueryResponse,
} from "../../types/transactions/GetTransactions";
import { createApiResponseTransaction } from "../createApiResponseTransaction";

export function createGetTransactionsQueryParams(): NonNullable<GetTransactionsQueryParams> {
  faker.seed([100]);

  return {
    counterpartyId: faker.helpers.arrayElement<any>([
      faker.string.alpha(),
      faker.string.uuid(),
    ]),
  };
}

/**
 * @description OK
 */
export function createGetTransactions200(): NonNullable<GetTransactions200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseTransaction()]) as any;
}

/**
 * @description OK
 */
export function createGetTransactionsQueryResponse(): NonNullable<GetTransactionsQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseTransaction()]) as any;
}
