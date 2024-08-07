import { faker } from "@faker-js/faker";

import type {
  CreateAdminForAsset200,
  CreateAdminForAssetMutationRequest,
  CreateAdminForAssetMutationResponse,
  CreateAdminForAssetPathParams,
} from "../../types/fundManagement/CreateAdminForAsset";
import { createApiResponseFundAdmin } from "../createApiResponseFundAdmin";
import { createFundAdminRequest } from "../createFundAdminRequest";

export function createCreateAdminForAssetPathParams(): NonNullable<CreateAdminForAssetPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createCreateAdminForAsset200(): NonNullable<CreateAdminForAsset200> {
  faker.seed([100]);

  return createApiResponseFundAdmin();
}

export function createCreateAdminForAssetMutationRequest(): NonNullable<CreateAdminForAssetMutationRequest> {
  faker.seed([100]);

  return createFundAdminRequest();
}

/**
 * @description OK
 */
export function createCreateAdminForAssetMutationResponse(): NonNullable<CreateAdminForAssetMutationResponse> {
  faker.seed([100]);

  return createApiResponseFundAdmin();
}
