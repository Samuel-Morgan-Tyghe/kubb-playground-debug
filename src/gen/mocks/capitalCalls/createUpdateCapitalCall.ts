import { faker } from "@faker-js/faker";

import type {
  UpdateCapitalCall200,
  UpdateCapitalCallMutationRequest,
  UpdateCapitalCallMutationResponse,
  UpdateCapitalCallPathParams,
} from "../../types/capitalCalls/UpdateCapitalCall";
import { createApiResponseCapitalCall } from "../createApiResponseCapitalCall";
import { createCapitalCallUpdateRequest } from "../createCapitalCallUpdateRequest";

export function createUpdateCapitalCallPathParams(): NonNullable<UpdateCapitalCallPathParams> {
  faker.seed([100]);

  return { capitalCallId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateCapitalCall200(): NonNullable<UpdateCapitalCall200> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}

export function createUpdateCapitalCallMutationRequest(): NonNullable<UpdateCapitalCallMutationRequest> {
  faker.seed([100]);

  return createCapitalCallUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateCapitalCallMutationResponse(): NonNullable<UpdateCapitalCallMutationResponse> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}
