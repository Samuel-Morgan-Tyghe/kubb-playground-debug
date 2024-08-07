import { type BaseAsset } from "./BaseAsset";
import { type BasicApiResponse } from "./BasicApiResponse";

export type ApiResponseAsset = BasicApiResponse & {
  data?: BaseAsset;
};
