import { faker } from "@faker-js/faker";

import type { ApiResponseFundAdmin } from "../types/ApiResponseFundAdmin";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createFundAdmin } from "./createFundAdmin";

export function createApiResponseFundAdmin(
  data?: NonNullable<Partial<ApiResponseFundAdmin>>,
): NonNullable<ApiResponseFundAdmin> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createFundAdmin(),
  });
}
