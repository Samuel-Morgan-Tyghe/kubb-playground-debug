import { faker } from "@faker-js/faker";

import type {
  CreateGeneralPartner200,
  CreateGeneralPartnerMutationRequest,
  CreateGeneralPartnerMutationResponse,
} from "../../types/kyc/CreateGeneralPartner";
import { createApiResponseGeneralPartner } from "../createApiResponseGeneralPartner";
import { createCreateGeneralPartnerRequest } from "../createCreateGeneralPartnerRequest";

/**
 * @description OK
 */
export function createCreateGeneralPartner200(): NonNullable<CreateGeneralPartner200> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}

export function createCreateGeneralPartnerMutationRequest(): NonNullable<CreateGeneralPartnerMutationRequest> {
  faker.seed([100]);

  return createCreateGeneralPartnerRequest();
}

/**
 * @description OK
 */
export function createCreateGeneralPartnerMutationResponse(): NonNullable<CreateGeneralPartnerMutationResponse> {
  faker.seed([100]);

  return createApiResponseGeneralPartner();
}
