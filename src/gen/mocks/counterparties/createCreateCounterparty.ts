import { faker } from "@faker-js/faker";

import type {
  CreateCounterparty200,
  CreateCounterpartyMutationRequest,
  CreateCounterpartyMutationResponse,
} from "../../types/counterparties/CreateCounterparty";
import { createApiResponseCounterparty } from "../createApiResponseCounterparty";
import { createCounterpartyCreateRequest } from "../createCounterpartyCreateRequest";

/**
 * @description OK
 */
export function createCreateCounterparty200(): NonNullable<CreateCounterparty200> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}

export function createCreateCounterpartyMutationRequest(): NonNullable<CreateCounterpartyMutationRequest> {
  faker.seed([100]);

  return createCounterpartyCreateRequest();
}

/**
 * @description OK
 */
export function createCreateCounterpartyMutationResponse(): NonNullable<CreateCounterpartyMutationResponse> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}
