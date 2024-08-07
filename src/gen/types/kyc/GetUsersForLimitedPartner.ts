import type { ApiResponseUser } from "../ApiResponseUser";

export type GetUsersForLimitedPartnerQueryParams = {
  /**
   * @type string
   */
  limitedPartnerId: string;
};
/**
 * @description OK
 */
export type GetUsersForLimitedPartner200 = ApiResponseUser[];
/**
 * @description OK
 */
export type GetUsersForLimitedPartnerQueryResponse = ApiResponseUser[];
export type GetUsersForLimitedPartnerQuery = {
  QueryParams: GetUsersForLimitedPartnerQueryParams;
  Response: GetUsersForLimitedPartnerQueryResponse;
};
