import { faker } from "@faker-js/faker";

import type { AssetValuationType } from "../types/AssetValuationType";

export function createAssetValuationType(): NonNullable<AssetValuationType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["NAV", "TVPI"]);
}
