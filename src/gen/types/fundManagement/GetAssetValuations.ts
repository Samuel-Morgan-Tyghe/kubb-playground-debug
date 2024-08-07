import type { ApiResponseAssetValuation } from "../ApiResponseAssetValuation";

export type GetAssetValuationsPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type GetAssetValuations200 = ApiResponseAssetValuation[];
/**
 * @description OK
 */
export type GetAssetValuationsQueryResponse = ApiResponseAssetValuation[];
export type GetAssetValuationsQuery = {
  PathParams: GetAssetValuationsPathParams;
  Response: GetAssetValuationsQueryResponse;
};
