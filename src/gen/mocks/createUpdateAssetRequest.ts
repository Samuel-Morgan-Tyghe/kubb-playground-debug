import { faker } from "@faker-js/faker";

import type { UpdateAssetRequest } from "../types/UpdateAssetRequest";

import { createAssetSource } from "./createAssetSource";
import { createAssetStatus } from "./createAssetStatus";
import { createAssetType } from "./createAssetType";
import { createAssetValuationType } from "./createAssetValuationType";
import { createCurrency } from "./createCurrency";

export function createUpdateAssetRequest(
  data: NonNullable<Partial<UpdateAssetRequest>> = {},
): NonNullable<UpdateAssetRequest> {
  faker.seed([100]);

  return {
    ...{
      assetClass: createAssetValuationType(),
      assetStrategy: createAssetSource(),
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
