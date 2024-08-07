import type { ApiResponseFundAdmin } from "../ApiResponseFundAdmin";
import { type FundAdminRequest } from "../FundAdminRequest";

export type CreateAdminForAssetPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type CreateAdminForAsset200 = ApiResponseFundAdmin;
export type CreateAdminForAssetMutationRequest = FundAdminRequest;
/**
 * @description OK
 */
export type CreateAdminForAssetMutationResponse = ApiResponseFundAdmin;
export type CreateAdminForAssetMutation = {
  PathParams: CreateAdminForAssetPathParams;
  Request: CreateAdminForAssetMutationRequest;
  Response: CreateAdminForAssetMutationResponse;
};
