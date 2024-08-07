import { faker } from "@faker-js/faker";

import type {
  CreateCapitalCall200,
  CreateCapitalCallMutationRequest,
  CreateCapitalCallMutationResponse,
} from "../../types/capitalCalls/CreateCapitalCall";
import { createApiResponseCapitalCall } from "../createApiResponseCapitalCall";
import { createCapitalCallCreateRequest } from "../createCapitalCallCreateRequest";

/**
 * @description OK
 */
export function createCreateCapitalCall200(): NonNullable<CreateCapitalCall200> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}

export function createCreateCapitalCallMutationRequest(): NonNullable<CreateCapitalCallMutationRequest> {
  faker.seed([100]);

  return createCapitalCallCreateRequest();
}

/**
 * @description OK
 */
export function createCreateCapitalCallMutationResponse(): NonNullable<CreateCapitalCallMutationResponse> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}
