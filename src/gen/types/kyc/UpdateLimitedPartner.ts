import type { ApiResponseLimitedPartner } from "../ApiResponseLimitedPartner";
import { type UpdateLimitedPartnerRequest } from "../UpdateLimitedPartnerRequest";

export type UpdateLimitedPartnerPathParams = {
  /**
   * @type string
   */
  limitedPartnerId: string;
};
/**
 * @description OK
 */
export type UpdateLimitedPartner200 = ApiResponseLimitedPartner;
export type UpdateLimitedPartnerMutationRequest = UpdateLimitedPartnerRequest;
/**
 * @description OK
 */
export type UpdateLimitedPartnerMutationResponse = ApiResponseLimitedPartner;
export type UpdateLimitedPartnerMutation = {
  PathParams: UpdateLimitedPartnerPathParams;
  Request: UpdateLimitedPartnerMutationRequest;
  Response: UpdateLimitedPartnerMutationResponse;
};
