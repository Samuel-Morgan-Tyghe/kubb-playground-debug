import { faker } from "@faker-js/faker";

import type {
  GetAssetValuations200,
  GetAssetValuationsPathParams,
  GetAssetValuationsQueryResponse,
} from "../../types/fundManagement/GetAssetValuations";
import { createApiResponseAssetValuation } from "../createApiResponseAssetValuation";

export function createGetAssetValuationsPathParams(): NonNullable<GetAssetValuationsPathParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetAssetValuations200(): NonNullable<GetAssetValuations200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseAssetValuation(),
  ]) as any;
}

/**
 * @description OK
 */
export function createGetAssetValuationsQueryResponse(): NonNullable<GetAssetValuationsQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseAssetValuation(),
  ]) as any;
}
