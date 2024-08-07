import { faker } from "@faker-js/faker";

import type { CreateLimitedPartnerRequest } from "../types/CreateLimitedPartnerRequest";

export function createCreateLimitedPartnerRequest(
  data: NonNullable<Partial<CreateLimitedPartnerRequest>> = {},
): NonNullable<CreateLimitedPartnerRequest> {
  faker.seed([100]);

  return {
    ...{
      profileId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      userId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
    },
    ...data,
  };
}
