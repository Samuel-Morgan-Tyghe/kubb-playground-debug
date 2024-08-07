import { type BasicApiResponse } from "./BasicApiResponse";
import { type CapitalCallInvoice } from "./CapitalCallInvoice";

export type ApiResponseCapitalCallInvoice = BasicApiResponse & {
  data?: CapitalCallInvoice;
};
