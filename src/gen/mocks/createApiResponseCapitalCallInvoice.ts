import { faker } from "@faker-js/faker";

import type { ApiResponseCapitalCallInvoice } from "../types/ApiResponseCapitalCallInvoice";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createCapitalCallInvoice } from "./createCapitalCallInvoice";

export function createApiResponseCapitalCallInvoice(
  data?: NonNullable<Partial<ApiResponseCapitalCallInvoice>>,
): NonNullable<ApiResponseCapitalCallInvoice> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createCapitalCallInvoice(),
  });
}
