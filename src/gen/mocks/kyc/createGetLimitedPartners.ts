import { faker } from "@faker-js/faker";

import type {
  GetLimitedPartners200,
  GetLimitedPartnersQueryParams,
  GetLimitedPartnersQueryResponse,
} from "../../types/kyc/GetLimitedPartners";
import { createApiResponseLimitedPartner } from "../createApiResponseLimitedPartner";

export function createGetLimitedPartnersQueryParams(): NonNullable<GetLimitedPartnersQueryParams> {
  faker.seed([100]);

  return { generalPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetLimitedPartners200(): NonNullable<GetLimitedPartners200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseLimitedPartner(),
  ]) as any;
}

/**
 * @description OK
 */
export function createGetLimitedPartnersQueryResponse(): NonNullable<GetLimitedPartnersQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseLimitedPartner(),
  ]) as any;
}
