import { faker } from "@faker-js/faker";

import type { ErrorResponse } from "../types/ErrorResponse";

import { createHttpStatusCode } from "./createHttpStatusCode";

export function createErrorResponse(
  data: NonNullable<Partial<ErrorResponse>> = {},
): NonNullable<ErrorResponse> {
  faker.seed([100]);

  return {
    ...{
      errorCode: faker.number.int(),
      message: faker.string.alpha(),
      statusCode: createHttpStatusCode(),
    },
    ...data,
  };
}
