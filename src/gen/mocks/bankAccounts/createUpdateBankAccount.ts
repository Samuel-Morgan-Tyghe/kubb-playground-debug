import { faker } from "@faker-js/faker";

import type {
  UpdateBankAccount200,
  UpdateBankAccountMutationRequest,
  UpdateBankAccountMutationResponse,
  UpdateBankAccountPathParams,
} from "../../types/bankAccounts/UpdateBankAccount";
import { createApiResponseBankAccount } from "../createApiResponseBankAccount";
import { createUpdateBankAccountRequest } from "../createUpdateBankAccountRequest";

export function createUpdateBankAccountPathParams(): NonNullable<UpdateBankAccountPathParams> {
  faker.seed([100]);

  return {
    bankAccountId: faker.helpers.arrayElement<any>([
      faker.string.alpha(),
      faker.string.uuid(),
    ]),
  };
}

/**
 * @description OK
 */
export function createUpdateBankAccount200(): NonNullable<UpdateBankAccount200> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}

export function createUpdateBankAccountMutationRequest(): NonNullable<UpdateBankAccountMutationRequest> {
  faker.seed([100]);

  return createUpdateBankAccountRequest();
}

/**
 * @description OK
 */
export function createUpdateBankAccountMutationResponse(): NonNullable<UpdateBankAccountMutationResponse> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}
