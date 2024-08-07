import { faker } from "@faker-js/faker";

import type {
  GetBankAccountById200,
  GetBankAccountByIdPathParams,
  GetBankAccountByIdQueryResponse,
} from "../../types/bankAccounts/GetBankAccountById";
import { createApiResponseBankAccount } from "../createApiResponseBankAccount";

export function createGetBankAccountByIdPathParams(): NonNullable<GetBankAccountByIdPathParams> {
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
export function createGetBankAccountById200(): NonNullable<GetBankAccountById200> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}

/**
 * @description OK
 */
export function createGetBankAccountByIdQueryResponse(): NonNullable<GetBankAccountByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseBankAccount();
}
