import type { ApiResponseFundAdmin } from "../ApiResponseFundAdmin";
import { type UpdateFundAdminRequest } from "../UpdateFundAdminRequest";

export type UpdateAdminForAssetPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type UpdateAdminForAsset200 = ApiResponseFundAdmin;
export type UpdateAdminForAssetMutationRequest = UpdateFundAdminRequest;
/**
 * @description OK
 */
export type UpdateAdminForAssetMutationResponse = ApiResponseFundAdmin;
export type UpdateAdminForAssetMutation = {
  PathParams: UpdateAdminForAssetPathParams;
  Request: UpdateAdminForAssetMutationRequest;
  Response: UpdateAdminForAssetMutationResponse;
};
