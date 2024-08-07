import { type BankAccount } from "./BankAccount";
import { type BasicApiResponse } from "./BasicApiResponse";

export type ApiResponseBankAccount = BasicApiResponse & {
  data?: BankAccount;
};
