import type { ApiResponseTransaction } from "../ApiResponseTransaction";
import { type TransactionUpdateRequest } from "../TransactionUpdateRequest";

export type UpdateTransactionPathParams = {
  /**
   * @type string, uuid
   */
  transactionId: string;
};
/**
 * @description OK
 */
export type UpdateTransaction200 = ApiResponseTransaction;
export type UpdateTransactionMutationRequest = TransactionUpdateRequest;
/**
 * @description OK
 */
export type UpdateTransactionMutationResponse = ApiResponseTransaction;
export type UpdateTransactionMutation = {
  PathParams: UpdateTransactionPathParams;
  Request: UpdateTransactionMutationRequest;
  Response: UpdateTransactionMutationResponse;
};
