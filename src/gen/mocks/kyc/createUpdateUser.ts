import { faker } from "@faker-js/faker";

import type {
  UpdateUser200,
  UpdateUserMutationRequest,
  UpdateUserMutationResponse,
  UpdateUserPathParams,
} from "../../types/kyc/UpdateUser";
import { createApiResponseUser } from "../createApiResponseUser";
import { createUpdateUserRequest } from "../createUpdateUserRequest";

export function createUpdateUserPathParams(): NonNullable<UpdateUserPathParams> {
  faker.seed([100]);

  return { userId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateUser200(): NonNullable<UpdateUser200> {
  faker.seed([100]);

  return createApiResponseUser();
}

export function createUpdateUserMutationRequest(): NonNullable<UpdateUserMutationRequest> {
  faker.seed([100]);

  return createUpdateUserRequest();
}

/**
 * @description OK
 */
export function createUpdateUserMutationResponse(): NonNullable<UpdateUserMutationResponse> {
  faker.seed([100]);

  return createApiResponseUser();
}
