import { faker } from "@faker-js/faker";

import type {
  CreateBankAccount200,
  CreateBankAccountMutationRequest,
  CreateBankAccountMutationResponse,
} from "../../types/bankAccounts/CreateBankAccount";
import { createApiResponseBankAccount } from "../createApiResponseBankAccount";
import { createBankAccountRequest } from "../createBankAccountRequest";

/**
 * @description OK
 */
export function createCreateBankAccount200(): NonNullable<CreateBankAccount200> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}

export function createCreateBankAccountMutationRequest(): NonNullable<CreateBankAccountMutationRequest> {
  faker.seed([100]);

  return createBankAccountRequest();
}

/**
 * @description OK
 */
export function createCreateBankAccountMutationResponse(): NonNullable<CreateBankAccountMutationResponse> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}
