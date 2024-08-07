import type { ApiResponseAssetValuation } from "../ApiResponseAssetValuation";
import { type AssetValuationRequest } from "../AssetValuationRequest";

export type CreateAssetValuationPathParams = {
  /**
   * @type string
   */
  assetId: string;
};
/**
 * @description OK
 */
export type CreateAssetValuation200 = ApiResponseAssetValuation;
export type CreateAssetValuationMutationRequest = AssetValuationRequest;
/**
 * @description OK
 */
export type CreateAssetValuationMutationResponse = ApiResponseAssetValuation;
export type CreateAssetValuationMutation = {
  PathParams: CreateAssetValuationPathParams;
  Request: CreateAssetValuationMutationRequest;
  Response: CreateAssetValuationMutationResponse;
};
