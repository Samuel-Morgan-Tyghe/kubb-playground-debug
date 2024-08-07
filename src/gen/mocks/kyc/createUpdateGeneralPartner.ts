import { faker } from "@faker-js/faker";

import type {
  UpdateGeneralPartner200,
  UpdateGeneralPartnerMutationRequest,
  UpdateGeneralPartnerMutationResponse,
  UpdateGeneralPartnerPathParams,
} from "../../types/kyc/UpdateGeneralPartner";
import { createApiResponseGeneralPartner } from "../createApiResponseGeneralPartner";
import { createGeneralPartnerUpdateRequest } from "../createGeneralPartnerUpdateRequest";

export function createUpdateGeneralPartnerPathParams(): NonNullable<UpdateGeneralPartnerPathParams> {
  faker.seed([100]);

  return { generalPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateGeneralPartner200(): NonNullable<UpdateGeneralPartner200> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}

export function createUpdateGeneralPartnerMutationRequest(): NonNullable<UpdateGeneralPartnerMutationRequest> {
  faker.seed([100]);

  return createGeneralPartnerUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateGeneralPartnerMutationResponse(): NonNullable<UpdateGeneralPartnerMutationResponse> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}
