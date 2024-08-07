import { faker } from "@faker-js/faker";

import type {
  CreateLimitedPartner200,
  CreateLimitedPartnerMutationRequest,
  CreateLimitedPartnerMutationResponse,
} from "../../types/kyc/CreateLimitedPartner";
import { createApiResponseLimitedPartner } from "../createApiResponseLimitedPartner";
import { createCreateLimitedPartnerRequest } from "../createCreateLimitedPartnerRequest";

/**
 * @description OK
 */
export function createCreateLimitedPartner200(): NonNullable<CreateLimitedPartner200> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}

export function createCreateLimitedPartnerMutationRequest(): NonNullable<CreateLimitedPartnerMutationRequest> {
  faker.seed([100]);

  return createCreateLimitedPartnerRequest();
}

/**
 * @description OK
 */
export function createCreateLimitedPartnerMutationResponse(): NonNullable<CreateLimitedPartnerMutationResponse> {
  faker.seed([100]);

  return createApiResponseLimitedPartner();
}
