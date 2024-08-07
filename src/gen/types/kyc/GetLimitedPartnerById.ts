import type { ApiResponseLimitedPartner } from "../ApiResponseLimitedPartner";

export type GetLimitedPartnerByIdPathParams = {
  /**
   * @type string
   */
  limitedPartnerId: string;
};
/**
 * @description OK
 */
export type GetLimitedPartnerById200 = ApiResponseLimitedPartner;
/**
 * @description OK
 */
export type GetLimitedPartnerByIdQueryResponse = ApiResponseLimitedPartner;
export type GetLimitedPartnerByIdQuery = {
  PathParams: GetLimitedPartnerByIdPathParams;
  Response: GetLimitedPartnerByIdQueryResponse;
};
