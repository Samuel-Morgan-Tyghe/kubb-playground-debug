import type { ApiResponseCounterparty } from "../ApiResponseCounterparty";
import { type CounterpartyCreateRequest } from "../CounterpartyCreateRequest";

/**
 * @description OK
 */
export type CreateCounterparty200 = ApiResponseCounterparty;
export type CreateCounterpartyMutationRequest = CounterpartyCreateRequest;
/**
 * @description OK
 */
export type CreateCounterpartyMutationResponse = ApiResponseCounterparty;
export type CreateCounterpartyMutation = {
  Request: CreateCounterpartyMutationRequest;
  Response: CreateCounterpartyMutationResponse;
};
