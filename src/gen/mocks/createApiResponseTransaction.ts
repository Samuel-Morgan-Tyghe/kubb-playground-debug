import { faker } from "@faker-js/faker";

import type { ApiResponseTransaction } from "../types/ApiResponseTransaction";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createTransaction } from "./createTransaction";

export function createApiResponseTransaction(
  data?: NonNullable<Partial<ApiResponseTransaction>>,
): NonNullable<ApiResponseTransaction> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createTransaction(),
  });
}
