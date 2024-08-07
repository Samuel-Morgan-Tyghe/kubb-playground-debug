import { faker } from "@faker-js/faker";

import type { AssetStrategy } from "../types/AssetStrategy";

export function createAssetStrategy(): NonNullable<AssetStrategy> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREDIT",
    "EQUITY",
    "REAL_ASSETS",
    "MIXED",
  ]);
}
