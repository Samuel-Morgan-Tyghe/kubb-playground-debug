import { type BasicApiResponse } from "./BasicApiResponse";
import { type Counterparty } from "./Counterparty";

export type ApiResponseCounterparty = BasicApiResponse & {
  data?: Counterparty;
};
