import type { ApiResponseBankAccount } from "../ApiResponseBankAccount";
import { type BankAccountRequest } from "../BankAccountRequest";

/**
 * @description OK
 */
export type CreateBankAccount200 = ApiResponseBankAccount;
export type CreateBankAccountMutationRequest = BankAccountRequest;
/**
 * @description OK
 */
export type CreateBankAccountMutationResponse = ApiResponseBankAccount;
export type CreateBankAccountMutation = {
  Request: CreateBankAccountMutationRequest;
  Response: CreateBankAccountMutationResponse;
};
