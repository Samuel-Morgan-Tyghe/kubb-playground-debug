import { faker } from "@faker-js/faker";

import type { AssetClass } from "../types/AssetClass";

export function createAssetClass(): NonNullable<AssetClass> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CORPORATE_CREDIT",
    "ASSET_BACKED_FINANCE",
    "PRIVATE_EQUITY",
    "HYBRID_VALUE",
    "IMPACT_INVESTING",
    "SECONDARIES",
    "INFRASTRUCTURE",
    "REAL_ESTATE",
    "SUSTAINABLE_INVESTING",
    "EUROPEAN_PRINCIPAL_FINANCE",
    "MIXED",
  ]);
}
