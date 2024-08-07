import { faker } from "@faker-js/faker";

import type { AssetStatus } from "../types/AssetStatus";

export function createAssetStatus(): NonNullable<AssetStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "CREATED",
    "OPEN",
    "CLOSED",
    "TERMINATED",
  ]);
}
