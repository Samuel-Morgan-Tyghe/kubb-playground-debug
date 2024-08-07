import type { ApiResponseAsset } from "../ApiResponseAsset";
import { type BaseAsset } from "../BaseAsset";

/**
 * @description OK
 */
export type CreateAsset200 = ApiResponseAsset;
export type CreateAssetMutationRequest = BaseAsset;
/**
 * @description OK
 */
export type CreateAssetMutationResponse = ApiResponseAsset;
export type CreateAssetMutation = {
  Request: CreateAssetMutationRequest;
  Response: CreateAssetMutationResponse;
};
