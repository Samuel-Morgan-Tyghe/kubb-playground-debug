import { faker } from "@faker-js/faker";

import type { BaseAsset } from "../types/BaseAsset";

import { createAssetClass } from "./createAssetClass";
import { createAssetStatus } from "./createAssetStatus";
import { createAssetStrategy } from "./createAssetStrategy";
import { createAssetType } from "./createAssetType";
import { createCurrency } from "./createCurrency";

export function createBaseAsset(
  data: NonNullable<Partial<BaseAsset>> = {},
): NonNullable<BaseAsset> {
  faker.seed([100]);

  return {
    ...{
      assetClass: createAssetClass(),
      assetStrategy: createAssetStrategy(),
      closingDate: faker.string.alpha(),
      counterPartyId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      currency: createCurrency(),
      description: faker.string.alpha(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      isin: faker.string.alpha(),
      logoUrl: faker.string.alpha(),
      longDescription: faker.string.alpha(),
      minimumInvestment: faker.number.float(),
      name: faker.string.alpha(),
      shortName: faker.string.alpha(),
      smallLogoUrl: faker.string.alpha(),
      status: createAssetStatus(),
      type: createAssetType(),
    },
    ...data,
  };
}
