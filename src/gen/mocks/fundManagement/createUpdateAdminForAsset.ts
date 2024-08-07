import { faker } from "@faker-js/faker";

import type {
  UpdateAdminForAsset200,
  UpdateAdminForAssetMutationRequest,
  UpdateAdminForAssetMutationResponse,
  UpdateAdminForAssetPathParams,
} from "../../types/fundManagement/UpdateAdminForAsset";
import { createApiResponseFundAdmin } from "../createApiResponseFundAdmin";
import { createUpdateFundAdminRequest } from "../createUpdateFundAdminRequest";

export function createUpdateAdminForAssetPathParams(): NonNullable<UpdateAdminForAssetPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateAdminForAsset200(): NonNullable<UpdateAdminForAsset200> {
  faker.seed([100]);

  return createApiResponseFundAdmin();
}

export function createUpdateAdminForAssetMutationRequest(): NonNullable<UpdateAdminForAssetMutationRequest> {
  faker.seed([100]);

  return createUpdateFundAdminRequest();
}

/**
 * @description OK
 */
export function createUpdateAdminForAssetMutationResponse(): NonNullable<UpdateAdminForAssetMutationResponse> {
  faker.seed([100]);

  return createApiResponseFundAdmin();
}
