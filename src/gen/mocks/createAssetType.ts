import { faker } from "@faker-js/faker";

import type { AssetType } from "../types/AssetType";

export function createAssetType(): NonNullable<AssetType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["DRAWDOWN", "SEMI_LIQUID", "CASH"]);
}
