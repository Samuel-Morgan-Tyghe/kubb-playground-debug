import type { ApiResponseCounterparty } from "../ApiResponseCounterparty";
import { type CounterpartyUpdateRequest } from "../CounterpartyUpdateRequest";

export type UpdateCounterpartyPathParams = {
  /**
   * @type string, uuid
   */
  counterpartyId: string;
};
/**
 * @description OK
 */
export type UpdateCounterparty200 = ApiResponseCounterparty;
export type UpdateCounterpartyMutationRequest = CounterpartyUpdateRequest;
/**
 * @description OK
 */
export type UpdateCounterpartyMutationResponse = ApiResponseCounterparty;
export type UpdateCounterpartyMutation = {
  PathParams: UpdateCounterpartyPathParams;
  Request: UpdateCounterpartyMutationRequest;
  Response: UpdateCounterpartyMutationResponse;
};
