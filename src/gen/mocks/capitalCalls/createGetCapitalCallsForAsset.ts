import { faker } from "@faker-js/faker";

import type {
  GetCapitalCallsForAsset200,
  GetCapitalCallsForAssetQueryParams,
  GetCapitalCallsForAssetQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallsForAsset";
import { createApiResponseCapitalCall } from "../createApiResponseCapitalCall";

export function createGetCapitalCallsForAssetQueryParams(): NonNullable<GetCapitalCallsForAssetQueryParams> {
  faker.seed([100]);

  return { assetId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetCapitalCallsForAsset200(): NonNullable<GetCapitalCallsForAsset200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseCapitalCall()]) as any;
}

/**
 * @description OK
 */
export function createGetCapitalCallsForAssetQueryResponse(): NonNullable<GetCapitalCallsForAssetQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseCapitalCall()]) as any;
}
