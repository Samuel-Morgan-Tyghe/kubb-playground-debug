import { faker } from "@faker-js/faker";

import type { FundAdminRequest } from "../types/FundAdminRequest";

export function createFundAdminRequest(
  data: NonNullable<Partial<FundAdminRequest>> = {},
): NonNullable<FundAdminRequest> {
  faker.seed([100]);

  return {
    ...{
      contactEmail: faker.string.alpha(),
      contactPhone: faker.string.alpha(),
      name: faker.string.alpha(),
    },
    ...data,
  };
}
