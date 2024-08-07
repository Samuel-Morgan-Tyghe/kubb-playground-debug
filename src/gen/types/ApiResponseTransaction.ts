import { type BasicApiResponse } from "./BasicApiResponse";
import { type Transaction } from "./Transaction";

export type ApiResponseTransaction = BasicApiResponse & {
  data?: Transaction;
};
