import { faker } from "@faker-js/faker";

import type {
  GetFundAdminByAssetId200,
  GetFundAdminByAssetIdPathParams,
  GetFundAdminByAssetIdQueryResponse,
} from "../../types/fundManagement/GetFundAdminByAssetId";
import { createApiResponseFundAdmin } from "../createApiResponseFundAdmin";

export function createGetFundAdminByAssetIdPathParams(): NonNullable<GetFundAdminByAssetIdPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetFundAdminByAssetId200(): NonNullable<GetFundAdminByAssetId200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseFundAdmin()]) as any;
}

/**
 * @description OK
 */
export function createGetFundAdminByAssetIdQueryResponse(): NonNullable<GetFundAdminByAssetIdQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseFundAdmin()]) as any;
}
