import { faker } from "@faker-js/faker";

import type { ApiResponseLimitedPartner } from "../types/ApiResponseLimitedPartner";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createLimitedPartnerResponse } from "./createLimitedPartnerResponse";

export function createApiResponseLimitedPartner(
  data?: NonNullable<Partial<ApiResponseLimitedPartner>>,
): NonNullable<ApiResponseLimitedPartner> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createLimitedPartnerResponse(),
  });
}
