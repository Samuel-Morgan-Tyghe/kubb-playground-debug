import { type BasicApiResponse } from "./BasicApiResponse";
import { type CapitalCall } from "./CapitalCall";

export type ApiResponseCapitalCall = BasicApiResponse & {
  data?: CapitalCall;
};
