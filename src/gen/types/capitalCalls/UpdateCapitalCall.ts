import type { ApiResponseCapitalCall } from "../ApiResponseCapitalCall";
import { type CapitalCallUpdateRequest } from "../CapitalCallUpdateRequest";

export type UpdateCapitalCallPathParams = {
  /**
   * @type string
   */
  capitalCallId: string;
};
/**
 * @description OK
 */
export type UpdateCapitalCall200 = ApiResponseCapitalCall;
export type UpdateCapitalCallMutationRequest = CapitalCallUpdateRequest;
/**
 * @description OK
 */
export type UpdateCapitalCallMutationResponse = ApiResponseCapitalCall;
export type UpdateCapitalCallMutation = {
  PathParams: UpdateCapitalCallPathParams;
  Request: UpdateCapitalCallMutationRequest;
  Response: UpdateCapitalCallMutationResponse;
};
