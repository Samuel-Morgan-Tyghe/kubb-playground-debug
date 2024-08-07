import type { ApiResponseGeneralPartner } from "../ApiResponseGeneralPartner";
import { type CreateGeneralPartnerRequest } from "../CreateGeneralPartnerRequest";

/**
 * @description OK
 */
export type CreateGeneralPartner200 = ApiResponseGeneralPartner;
export type CreateGeneralPartnerMutationRequest = CreateGeneralPartnerRequest;
/**
 * @description OK
 */
export type CreateGeneralPartnerMutationResponse = ApiResponseGeneralPartner;
export type CreateGeneralPartnerMutation = {
  Request: CreateGeneralPartnerMutationRequest;
  Response: CreateGeneralPartnerMutationResponse;
};
