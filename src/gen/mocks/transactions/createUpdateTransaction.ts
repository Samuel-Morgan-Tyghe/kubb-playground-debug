import { faker } from "@faker-js/faker";

import type {
  UpdateTransaction200,
  UpdateTransactionMutationRequest,
  UpdateTransactionMutationResponse,
  UpdateTransactionPathParams,
} from "../../types/transactions/UpdateTransaction";
import { createApiResponseTransaction } from "../createApiResponseTransaction";
import { createTransactionUpdateRequest } from "../createTransactionUpdateRequest";

export function createUpdateTransactionPathParams(): NonNullable<UpdateTransactionPathParams> {
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
export function createUpdateTransaction200(): NonNullable<UpdateTransaction200> {
  faker.seed([100]);

  return createApiResponseTransaction();
}

export function createUpdateTransactionMutationRequest(): NonNullable<UpdateTransactionMutationRequest> {
  faker.seed([100]);

  return createTransactionUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateTransactionMutationResponse(): NonNullable<UpdateTransactionMutationResponse> {
  faker.seed([100]);

  return createApiResponseTransaction();
}
