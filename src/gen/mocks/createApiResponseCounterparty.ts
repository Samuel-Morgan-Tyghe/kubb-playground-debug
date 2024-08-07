import { faker } from "@faker-js/faker";

import type { ApiResponseCounterparty } from "../types/ApiResponseCounterparty";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createCounterparty } from "./createCounterparty";

export function createApiResponseCounterparty(
  data?: NonNullable<Partial<ApiResponseCounterparty>>,
): NonNullable<ApiResponseCounterparty> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createCounterparty(),
  });
}
