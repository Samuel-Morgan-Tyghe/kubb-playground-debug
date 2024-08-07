import { faker } from "@faker-js/faker";

import type { UpdateFundAdminRequest } from "../types/UpdateFundAdminRequest";

export function createUpdateFundAdminRequest(
  data: NonNullable<Partial<UpdateFundAdminRequest>> = {},
): NonNullable<UpdateFundAdminRequest> {
  faker.seed([100]);

  return {
    ...{
      description: faker.string.alpha(),
      firstName: faker.string.alpha(),
      id: faker.string.alpha(),
      lastName: faker.string.alpha(),
      resourceId: faker.string.alpha(),
    },
    ...data,
  };
}
