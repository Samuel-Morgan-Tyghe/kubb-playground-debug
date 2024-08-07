import { faker } from "@faker-js/faker";

import type { AssetSource } from "../types/AssetSource";

export function createAssetSource(): NonNullable<AssetSource> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "FUND_MANAGER",
    "FUND_ADMIN",
    "INVESTOR",
    "THIRD_PARTY",
    "UNKNOWN",
  ]);
}
