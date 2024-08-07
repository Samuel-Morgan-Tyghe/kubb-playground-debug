import { faker } from "@faker-js/faker";

import type {
  CreateAssetValuation200,
  CreateAssetValuationMutationRequest,
  CreateAssetValuationMutationResponse,
  CreateAssetValuationPathParams,
} from "../../types/fundManagement/CreateAssetValuation";
import { createApiResponseAssetValuation } from "../createApiResponseAssetValuation";
import { createAssetValuationRequest } from "../createAssetValuationRequest";

export function createCreateAssetValuationPathParams(): NonNullable<CreateAssetValuationPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createCreateAssetValuation200(): NonNullable<CreateAssetValuation200> {
  faker.seed([100]);

  return createApiResponseAssetValuation();
}

export function createCreateAssetValuationMutationRequest(): NonNullable<CreateAssetValuationMutationRequest> {
  faker.seed([100]);

  return createAssetValuationRequest();
}

/**
 * @description OK
 */
export function createCreateAssetValuationMutationResponse(): NonNullable<CreateAssetValuationMutationResponse> {
  faker.seed([100]);

  return createApiResponseAssetValuation();
}
