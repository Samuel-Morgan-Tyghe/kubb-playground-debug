import { type BasicApiResponse } from "./BasicApiResponse";
import { type FundAdmin } from "./FundAdmin";

export type ApiResponseFundAdmin = BasicApiResponse & {
  data?: FundAdmin;
};
