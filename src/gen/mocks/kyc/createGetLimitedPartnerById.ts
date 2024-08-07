import { faker } from "@faker-js/faker";

import type {
  GetLimitedPartnerById200,
  GetLimitedPartnerByIdPathParams,
  GetLimitedPartnerByIdQueryResponse,
} from "../../types/kyc/GetLimitedPartnerById";
import { createApiResponseLimitedPartner } from "../createApiResponseLimitedPartner";

export function createGetLimitedPartnerByIdPathParams(): NonNullable<GetLimitedPartnerByIdPathParams> {
  faker.seed([100]);

  return { limitedPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetLimitedPartnerById200(): NonNullable<GetLimitedPartnerById200> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}

/**
 * @description OK
 */
export function createGetLimitedPartnerByIdQueryResponse(): NonNullable<GetLimitedPartnerByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}
