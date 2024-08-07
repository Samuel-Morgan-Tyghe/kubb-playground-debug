import type { ApiResponseGeneralPartner } from "../ApiResponseGeneralPartner";
import { type GeneralPartnerUpdateRequest } from "../GeneralPartnerUpdateRequest";

export type UpdateGeneralPartnerPathParams = {
  /**
   * @type string
   */
  generalPartnerId: string;
};
/**
 * @description OK
 */
export type UpdateGeneralPartner200 = ApiResponseGeneralPartner;
export type UpdateGeneralPartnerMutationRequest = GeneralPartnerUpdateRequest;
/**
 * @description OK
 */
export type UpdateGeneralPartnerMutationResponse = ApiResponseGeneralPartner;
export type UpdateGeneralPartnerMutation = {
  PathParams: UpdateGeneralPartnerPathParams;
  Request: UpdateGeneralPartnerMutationRequest;
  Response: UpdateGeneralPartnerMutationResponse;
};
