import type { ApiResponseGeneralPartner } from "../ApiResponseGeneralPartner";

export type GetGeneralPartnerByIdPathParams = {
  /**
   * @type string
   */
  generalPartnerId: string;
};
/**
 * @description OK
 */
export type GetGeneralPartnerById200 = ApiResponseGeneralPartner;
/**
 * @description OK
 */
export type GetGeneralPartnerByIdQueryResponse = ApiResponseGeneralPartner;
export type GetGeneralPartnerByIdQuery = {
  PathParams: GetGeneralPartnerByIdPathParams;
  Response: GetGeneralPartnerByIdQueryResponse;
};
