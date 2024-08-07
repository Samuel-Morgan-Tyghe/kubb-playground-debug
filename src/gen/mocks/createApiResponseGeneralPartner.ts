import { faker } from "@faker-js/faker";

import type { ApiResponseGeneralPartner } from "../types/ApiResponseGeneralPartner";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createGeneralPartner } from "./createGeneralPartner";

export function createApiResponseGeneralPartner(
  data?: NonNullable<Partial<ApiResponseGeneralPartner>>,
): NonNullable<ApiResponseGeneralPartner> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createGeneralPartner(),
  });
}
