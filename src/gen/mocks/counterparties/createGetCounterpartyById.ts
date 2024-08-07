import { faker } from "@faker-js/faker";

import type {
  GetCounterpartyById200,
  GetCounterpartyByIdPathParams,
  GetCounterpartyByIdQueryResponse,
} from "../../types/counterparties/GetCounterpartyById";
import { createApiResponseCounterparty } from "../createApiResponseCounterparty";

export function createGetCounterpartyByIdPathParams(): NonNullable<GetCounterpartyByIdPathParams> {
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
export function createGetCounterpartyById200(): NonNullable<GetCounterpartyById200> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}

/**
 * @description OK
 */
export function createGetCounterpartyByIdQueryResponse(): NonNullable<GetCounterpartyByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseCounterparty();
}
