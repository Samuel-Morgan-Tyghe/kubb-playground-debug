import { faker } from "@faker-js/faker";

import type {
  UpdateAsset200,
  UpdateAssetMutationRequest,
  UpdateAssetMutationResponse,
  UpdateAssetPathParams,
} from "../../types/fundManagement/UpdateAsset";
import { createApiResponseAsset } from "../createApiResponseAsset";
import { createUpdateAssetRequest } from "../createUpdateAssetRequest";

export function createUpdateAssetPathParams(): NonNullable<UpdateAssetPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateAsset200(): NonNullable<UpdateAsset200> {
  faker.seed([100]);

  return createApiResponseAsset();
}

export function createUpdateAssetMutationRequest(): NonNullable<UpdateAssetMutationRequest> {
  faker.seed([100]);

  return createUpdateAssetRequest();
}

/**
 * @description OK
 */
export function createUpdateAssetMutationResponse(): NonNullable<UpdateAssetMutationResponse> {
  faker.seed([100]);

  return createApiResponseAsset();
}
