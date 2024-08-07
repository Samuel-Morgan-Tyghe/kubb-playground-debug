import { type BasicApiResponse } from "./BasicApiResponse";
import { type GeneralPartner } from "./GeneralPartner";

export type ApiResponseGeneralPartner = BasicApiResponse & {
  data?: GeneralPartner;
};
