import { faker } from "@faker-js/faker";

import type { FundAdmin } from "../types/FundAdmin";

export function createFundAdmin(
  data: NonNullable<Partial<FundAdmin>> = {},
): NonNullable<FundAdmin> {
  faker.seed([100]);

  return {
    ...{
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      contactEmail: faker.string.alpha(),
      contactPhone: faker.string.alpha(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      name: faker.string.alpha(),
    },
    ...data,
  };
}
