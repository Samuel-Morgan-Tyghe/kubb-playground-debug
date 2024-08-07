import type { ApiResponseTransaction } from "../ApiResponseTransaction";
import { type TransactionRequest } from "../TransactionRequest";

/**
 * @description OK
 */
export type CreateTransaction200 = ApiResponseTransaction;
export type CreateTransactionMutationRequest = TransactionRequest;
/**
 * @description OK
 */
export type CreateTransactionMutationResponse = ApiResponseTransaction;
export type CreateTransactionMutation = {
  Request: CreateTransactionMutationRequest;
  Response: CreateTransactionMutationResponse;
};
