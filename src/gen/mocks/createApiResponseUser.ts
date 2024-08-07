import { faker } from "@faker-js/faker";

import type { ApiResponseUser } from "../types/ApiResponseUser";

import { createUserResponse } from "./createUserResponse";

export function createApiResponseUser(
  data: NonNullable<Partial<ApiResponseUser>> = {},
): NonNullable<ApiResponseUser> {
  faker.seed([100]);

  return {
    ...{ data: createUserResponse() },
    ...data,
  };
}
