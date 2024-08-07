import type { ApiResponseFundAdmin } from "../ApiResponseFundAdmin";

export type GetFundAdminByAssetIdPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type GetFundAdminByAssetId200 = ApiResponseFundAdmin[];
/**
 * @description OK
 */
export type GetFundAdminByAssetIdQueryResponse = ApiResponseFundAdmin[];
export type GetFundAdminByAssetIdQuery = {
  PathParams: GetFundAdminByAssetIdPathParams;
  Response: GetFundAdminByAssetIdQueryResponse;
};
