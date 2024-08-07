import type { ApiResponseTransaction } from "../ApiResponseTransaction";

export type GetTransactionsQueryParams = {
  /**
   * @type string, uuid
   */
  counterpartyId: string;
};
/**
 * @description OK
 */
export type GetTransactions200 = ApiResponseTransaction[];
/**
 * @description OK
 */
export type GetTransactionsQueryResponse = ApiResponseTransaction[];
export type GetTransactionsQuery = {
  QueryParams: GetTransactionsQueryParams;
  Response: GetTransactionsQueryResponse;
};
