import { faker } from "@faker-js/faker";

import type {
  GetGeneralPartnerById200,
  GetGeneralPartnerByIdPathParams,
  GetGeneralPartnerByIdQueryResponse,
} from "../../types/kyc/GetGeneralPartnerById";
import { createApiResponseGeneralPartner } from "../createApiResponseGeneralPartner";

export function createGetGeneralPartnerByIdPathParams(): NonNullable<GetGeneralPartnerByIdPathParams> {
  faker.seed([100]);

  return { generalPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetGeneralPartnerById200(): NonNullable<GetGeneralPartnerById200> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}

/**
 * @description OK
 */
export function createGetGeneralPartnerByIdQueryResponse(): NonNullable<GetGeneralPartnerByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}
