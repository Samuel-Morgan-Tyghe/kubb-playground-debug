import { faker } from "@faker-js/faker";

import type {
  GetTransactionById200,
  GetTransactionByIdPathParams,
  GetTransactionByIdQueryResponse,
} from "../../types/transactions/GetTransactionById";
import { createApiResponseTransaction } from "../createApiResponseTransaction";

export function createGetTransactionByIdPathParams(): NonNullable<GetTransactionByIdPathParams> {
  faker.seed([100]);

  return {
    transactionId: faker.helpers.arrayElement<any>([
      faker.string.alpha(),
      faker.string.uuid(),
    ]),
  };
}

/**
 * @description OK
 */
export function createGetTransactionById200(): NonNullable<GetTransactionById200> {
  faker.seed([100]);

  return createApiResponseTransaction();
}

/**
 * @description OK
 */
export function createGetTransactionByIdQueryResponse(): NonNullable<GetTransactionByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseTransaction();
}
