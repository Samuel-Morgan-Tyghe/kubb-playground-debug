import type { ApiResponseLimitedPartner } from "../ApiResponseLimitedPartner";
import { type CreateLimitedPartnerRequest } from "../CreateLimitedPartnerRequest";

/**
 * @description OK
 */
export type CreateLimitedPartner200 = ApiResponseLimitedPartner;
export type CreateLimitedPartnerMutationRequest = CreateLimitedPartnerRequest;
/**
 * @description OK
 */
export type CreateLimitedPartnerMutationResponse = ApiResponseLimitedPartner;
export type CreateLimitedPartnerMutation = {
  Request: CreateLimitedPartnerMutationRequest;
  Response: CreateLimitedPartnerMutationResponse;
};
