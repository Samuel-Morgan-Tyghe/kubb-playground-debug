import { type BasicApiResponse } from "./BasicApiResponse";
import { type LimitedPartnerResponse } from "./LimitedPartnerResponse";

export type ApiResponseLimitedPartner = BasicApiResponse & {
  data?: LimitedPartnerResponse;
};
