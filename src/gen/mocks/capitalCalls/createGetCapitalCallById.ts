import { faker } from "@faker-js/faker";

import type {
  GetCapitalCallById200,
  GetCapitalCallByIdPathParams,
  GetCapitalCallByIdQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallById";
import { createApiResponseCapitalCall } from "../createApiResponseCapitalCall";

export function createGetCapitalCallByIdPathParams(): NonNullable<GetCapitalCallByIdPathParams> {
  faker.seed([100]);

  return { capitalCallId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetCapitalCallById200(): NonNullable<GetCapitalCallById200> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}

/**
 * @description OK
 */
export function createGetCapitalCallByIdQueryResponse(): NonNullable<GetCapitalCallByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseCapitalCall();
}
