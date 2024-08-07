import { faker } from "@faker-js/faker";

import type {
  UpdateCounterparty200,
  UpdateCounterpartyMutationRequest,
  UpdateCounterpartyMutationResponse,
  UpdateCounterpartyPathParams,
} from "../../types/counterparties/UpdateCounterparty";
import { createApiResponseCounterparty } from "../createApiResponseCounterparty";
import { createCounterpartyUpdateRequest } from "../createCounterpartyUpdateRequest";

export function createUpdateCounterpartyPathParams(): NonNullable<UpdateCounterpartyPathParams> {
  faker.seed([100]);

  return {
    counterpartyId: faker.helpers.arrayElement<any>([
      faker.string.alpha(),
      faker.string.uuid(),
    ]),
  };
}

/**
 * @description OK
 */
export function createUpdateCounterparty200(): NonNullable<UpdateCounterparty200> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}

export function createUpdateCounterpartyMutationRequest(): NonNullable<UpdateCounterpartyMutationRequest> {
  faker.seed([100]);

  return createCounterpartyUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateCounterpartyMutationResponse(): NonNullable<UpdateCounterpartyMutationResponse> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}
