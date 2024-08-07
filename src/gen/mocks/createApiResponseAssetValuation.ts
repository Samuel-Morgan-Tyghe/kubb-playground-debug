import { faker } from "@faker-js/faker";

import type { ApiResponseAssetValuation } from "../types/ApiResponseAssetValuation";

import { createAssetValuation } from "./createAssetValuation";
import { createBasicApiResponse } from "./createBasicApiResponse";

export function createApiResponseAssetValuation(
  data?: NonNullable<Partial<ApiResponseAssetValuation>>,
): NonNullable<ApiResponseAssetValuation> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createAssetValuation(),
  });
}
