import type { ApiResponseAsset } from "../ApiResponseAsset";

export type GetAssetByIdPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type GetAssetById200 = ApiResponseAsset;
/**
 * @description OK
 */
export type GetAssetByIdQueryResponse = ApiResponseAsset;
export type GetAssetByIdQuery = {
  PathParams: GetAssetByIdPathParams;
  Response: GetAssetByIdQueryResponse;
};
