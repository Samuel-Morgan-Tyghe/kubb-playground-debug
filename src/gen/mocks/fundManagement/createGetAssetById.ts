import { faker } from "@faker-js/faker";

import type {
  GetAssetById200,
  GetAssetByIdPathParams,
  GetAssetByIdQueryResponse,
} from "../../types/fundManagement/GetAssetById";
import { createApiResponseAsset } from "../createApiResponseAsset";

export function createGetAssetByIdPathParams(): NonNullable<GetAssetByIdPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetAssetById200(): NonNullable<GetAssetById200> {
  faker.seed([100]);

  return createApiResponseAsset();
}

/**
 * @description OK
 */
export function createGetAssetByIdQueryResponse(): NonNullable<GetAssetByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseAsset();
}
