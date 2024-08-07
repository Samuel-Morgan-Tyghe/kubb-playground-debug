import { faker } from "@faker-js/faker";

import type { AssetValuation } from "../types/AssetValuation";

import { createAssetSource } from "./createAssetSource";
import { createAssetValuationType } from "./createAssetValuationType";
import { createMoney } from "./createMoney";

export function createAssetValuation(
  data: NonNullable<Partial<AssetValuation>> = {},
): NonNullable<AssetValuation> {
  faker.seed([100]);

  return {
    ...{
      asOf: faker.string.alpha(),
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      assetValuationType: createAssetValuationType(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      source: createAssetSource(),
      valuation: createMoney(),
    },
    ...data,
  };
}
