import type { ApiResponseCapitalCall } from "../ApiResponseCapitalCall";

export type GetCapitalCallsForAssetQueryParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type GetCapitalCallsForAsset200 = ApiResponseCapitalCall[];
/**
 * @description OK
 */
export type GetCapitalCallsForAssetQueryResponse = ApiResponseCapitalCall[];
export type GetCapitalCallsForAssetQuery = {
  QueryParams: GetCapitalCallsForAssetQueryParams;
  Response: GetCapitalCallsForAssetQueryResponse;
};
