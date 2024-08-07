import { faker } from "@faker-js/faker";

import type { ApiResponseCapitalCall } from "../types/ApiResponseCapitalCall";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createCapitalCall } from "./createCapitalCall";

export function createApiResponseCapitalCall(
  data?: NonNullable<Partial<ApiResponseCapitalCall>>,
): NonNullable<ApiResponseCapitalCall> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createCapitalCall(),
  });
}
