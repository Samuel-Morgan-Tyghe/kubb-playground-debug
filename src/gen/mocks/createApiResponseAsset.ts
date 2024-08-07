import { faker } from "@faker-js/faker";

import type { ApiResponseAsset } from "../types/ApiResponseAsset";

import { createBaseAsset } from "./createBaseAsset";
import { createBasicApiResponse } from "./createBasicApiResponse";

export function createApiResponseAsset(
  data?: NonNullable<Partial<ApiResponseAsset>>,
): NonNullable<ApiResponseAsset> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createBaseAsset(),
  });
}
