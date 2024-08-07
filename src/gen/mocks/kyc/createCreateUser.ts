import { faker } from "@faker-js/faker";

import type {
  CreateUser200,
  CreateUserMutationRequest,
  CreateUserMutationResponse,
} from "../../types/kyc/CreateUser";
import { createApiResponseUser } from "../createApiResponseUser";
import { createCreateUserRequest } from "../createCreateUserRequest";

/**
 * @description OK
 */
export function createCreateUser200(): NonNullable<CreateUser200> {
  faker.seed([100]);

  return createApiResponseUser();
}

export function createCreateUserMutationRequest(): NonNullable<CreateUserMutationRequest> {
  faker.seed([100]);

  return createCreateUserRequest();
}

/**
 * @description OK
 */
export function createCreateUserMutationResponse(): NonNullable<CreateUserMutationResponse> {
  faker.seed([100]);

  return createApiResponseUser();
}
