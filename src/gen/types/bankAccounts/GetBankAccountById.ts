import type { ApiResponseBankAccount } from "../ApiResponseBankAccount";

export type GetBankAccountByIdPathParams = {
  /**
   * @type string, uuid
   */
  bankAccountId: string;
};
/**
 * @description OK
 */
export type GetBankAccountById200 = ApiResponseBankAccount;
/**
 * @description OK
 */
export type GetBankAccountByIdQueryResponse = ApiResponseBankAccount;
export type GetBankAccountByIdQuery = {
  PathParams: GetBankAccountByIdPathParams;
  Response: GetBankAccountByIdQueryResponse;
};
