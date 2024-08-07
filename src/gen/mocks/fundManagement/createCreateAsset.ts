import { faker } from "@faker-js/faker";

import type {
  CreateAsset200,
  CreateAssetMutationRequest,
  CreateAssetMutationResponse,
} from "../../types/fundManagement/CreateAsset";
import { createApiResponseAsset } from "../createApiResponseAsset";
import { createBaseAsset } from "../createBaseAsset";

/**
 * @description OK
 */
export function createCreateAsset200(): NonNullable<CreateAsset200> {
  faker.seed([100]);

  return createApiResponseAsset();
}

export function createCreateAssetMutationRequest(): NonNullable<CreateAssetMutationRequest> {
  faker.seed([100]);

  return createBaseAsset();
}

/**
 * @description OK
 */
export function createCreateAssetMutationResponse(): NonNullable<CreateAssetMutationResponse> {
  faker.seed([100]);

  return createApiResponseAsset();
}
