import { faker } from "@faker-js/faker";

import type {
  CreateTransaction200,
  CreateTransactionMutationRequest,
  CreateTransactionMutationResponse,
} from "../../types/transactions/CreateTransaction";
import { createApiResponseTransaction } from "../createApiResponseTransaction";
import { createTransactionRequest } from "../createTransactionRequest";

/**
 * @description OK
 */
export function createCreateTransaction200(): NonNullable<CreateTransaction200> {
  faker.seed([100]);

  return createApiResponseTransaction();
}

export function createCreateTransactionMutationRequest(): NonNullable<CreateTransactionMutationRequest> {
  faker.seed([100]);

  return createTransactionRequest();
}

/**
 * @description OK
 */
export function createCreateTransactionMutationResponse(): NonNullable<CreateTransactionMutationResponse> {
  faker.seed([100]);

  return createApiResponseTransaction();
}
