import type { ApiResponseAsset } from "../ApiResponseAsset";
import { type UpdateAssetRequest } from "../UpdateAssetRequest";

export type UpdateAssetPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type UpdateAsset200 = ApiResponseAsset;
export type UpdateAssetMutationRequest = UpdateAssetRequest;
/**
 * @description OK
 */
export type UpdateAssetMutationResponse = ApiResponseAsset;
export type UpdateAssetMutation = {
  PathParams: UpdateAssetPathParams;
  Request: UpdateAssetMutationRequest;
  Response: UpdateAssetMutationResponse;
};
