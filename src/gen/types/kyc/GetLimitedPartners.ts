import type { ApiResponseLimitedPartner } from "../ApiResponseLimitedPartner";

export type GetLimitedPartnersQueryParams = {
  /**
   * @type string
   */
  generalPartnerId: string;
};
/**
 * @description OK
 */
export type GetLimitedPartners200 = ApiResponseLimitedPartner[];
/**
 * @description OK
 */
export type GetLimitedPartnersQueryResponse = ApiResponseLimitedPartner[];
export type GetLimitedPartnersQuery = {
  QueryParams: GetLimitedPartnersQueryParams;
  Response: GetLimitedPartnersQueryResponse;
};
