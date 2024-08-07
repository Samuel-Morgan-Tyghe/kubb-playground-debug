import { faker } from "@faker-js/faker";

import type { BasicApiResponse } from "../types/BasicApiResponse";

import { createErrorResponse } from "./createErrorResponse";

export function createBasicApiResponse(
  data: NonNullable<Partial<BasicApiResponse>> = {},
): NonNullable<BasicApiResponse> {
  faker.seed([100]);

  return {
    ...{ data: {}, errors: createErrorResponse(), meta: {} },
    ...data,
  };
}
