import type { ApiResponseCapitalCall } from "../ApiResponseCapitalCall";
import { type CapitalCallCreateRequest } from "../CapitalCallCreateRequest";

/**
 * @description OK
 */
export type CreateCapitalCall200 = ApiResponseCapitalCall;
export type CreateCapitalCallMutationRequest = CapitalCallCreateRequest;
/**
 * @description OK
 */
export type CreateCapitalCallMutationResponse = ApiResponseCapitalCall;
export type CreateCapitalCallMutation = {
  Request: CreateCapitalCallMutationRequest;
  Response: CreateCapitalCallMutationResponse;
};
