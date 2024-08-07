import { faker } from "@faker-js/faker";

import type {
  UpdateLimitedPartner200,
  UpdateLimitedPartnerMutationRequest,
  UpdateLimitedPartnerMutationResponse,
  UpdateLimitedPartnerPathParams,
} from "../../types/kyc/UpdateLimitedPartner";
import { createApiResponseLimitedPartner } from "../createApiResponseLimitedPartner";
import { createUpdateLimitedPartnerRequest } from "../createUpdateLimitedPartnerRequest";

export function createUpdateLimitedPartnerPathParams(): NonNullable<UpdateLimitedPartnerPathParams> {
  faker.seed([100]);

  return { limitedPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateLimitedPartner200(): NonNullable<UpdateLimitedPartner200> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}

export function createUpdateLimitedPartnerMutationRequest(): NonNullable<UpdateLimitedPartnerMutationRequest> {
  faker.seed([100]);

  return createUpdateLimitedPartnerRequest();
}

/**
 * @description OK
 */
export function createUpdateLimitedPartnerMutationResponse(): NonNullable<UpdateLimitedPartnerMutationResponse> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}
