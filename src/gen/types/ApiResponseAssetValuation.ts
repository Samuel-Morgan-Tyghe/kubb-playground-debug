import { type AssetValuation } from "./AssetValuation";
import { type BasicApiResponse } from "./BasicApiResponse";

export type ApiResponseAssetValuation = BasicApiResponse & {
  data?: AssetValuation;
};
