import { faker } from "@faker-js/faker";

import type { ApiResponseBankAccount } from "../types/ApiResponseBankAccount";

import { createBankAccount } from "./createBankAccount";
import { createBasicApiResponse } from "./createBasicApiResponse";

export function createApiResponseBankAccount(
  data?: NonNullable<Partial<ApiResponseBankAccount>>,
): NonNullable<ApiResponseBankAccount> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createBankAccount(),
  });
}
