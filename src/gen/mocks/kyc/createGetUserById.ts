import { faker } from "@faker-js/faker";

import type {
  GetUserById200,
  GetUserByIdPathParams,
  GetUserByIdQueryResponse,
} from "../../types/kyc/GetUserById";
import { createApiResponseUser } from "../createApiResponseUser";

export function createGetUserByIdPathParams(): NonNullable<GetUserByIdPathParams> {
  faker.seed([100]);

  return { userId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetUserById200(): NonNullable<GetUserById200> {
  faker.seed([100]);

  return createApiResponseUser();
}

/**
 * @description OK
 */
export function createGetUserByIdQueryResponse(): NonNullable<GetUserByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseUser();
}
