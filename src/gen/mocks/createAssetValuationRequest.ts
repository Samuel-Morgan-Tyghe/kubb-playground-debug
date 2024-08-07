import { faker } from "@faker-js/faker";

import type { AssetValuationRequest } from "../types/AssetValuationRequest";

import { createAssetSource } from "./createAssetSource";
import { createAssetValuationType } from "./createAssetValuationType";
import { createCurrency } from "./createCurrency";

export function createAssetValuationRequest(
  data: NonNullable<Partial<AssetValuationRequest>> = {},
): NonNullable<AssetValuationRequest> {
  faker.seed([100]);

  return {
    ...{
      asOf: faker.string.alpha(),
      assetValuationType: createAssetValuationType(),
      currency: createCurrency(),
      source: createAssetSource(),
      value: faker.number.float(),
    },
    ...data,
  };
}
