import type { ApiResponseBankAccount } from "../ApiResponseBankAccount";
import { type UpdateBankAccountRequest } from "../UpdateBankAccountRequest";

export type UpdateBankAccountPathParams = {
  /**
   * @type string, uuid
   */
  bankAccountId: string;
};
/**
 * @description OK
 */
export type UpdateBankAccount200 = ApiResponseBankAccount;
export type UpdateBankAccountMutationRequest = UpdateBankAccountRequest;
/**
 * @description OK
 */
export type UpdateBankAccountMutationResponse = ApiResponseBankAccount;
export type UpdateBankAccountMutation = {
  PathParams: UpdateBankAccountPathParams;
  Request: UpdateBankAccountMutationRequest;
  Response: UpdateBankAccountMutationResponse;
};
