import type { ApiResponseTransaction } from "../ApiResponseTransaction";

export type GetTransactionByIdPathParams = {
  /**
   * @type string, uuid
   */
  transactionId: string;
};
/**
 * @description OK
 */
export type GetTransactionById200 = ApiResponseTransaction;
/**
 * @description OK
 */
export type GetTransactionByIdQueryResponse = ApiResponseTransaction;
export type GetTransactionByIdQuery = {
  PathParams: GetTransactionByIdPathParams;
  Response: GetTransactionByIdQueryResponse;
};
