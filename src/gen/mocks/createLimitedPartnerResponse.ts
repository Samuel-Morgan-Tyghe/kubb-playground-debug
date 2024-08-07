import { faker } from "@faker-js/faker";

import type { LimitedPartnerResponse } from "../types/LimitedPartnerResponse";

import { createLimitedPartnersStatus } from "./createLimitedPartnersStatus";

export function createLimitedPartnerResponse(
  data: NonNullable<Partial<LimitedPartnerResponse>> = {},
): NonNullable<LimitedPartnerResponse> {
  faker.seed([100]);

  return {
    ...{
      generalPartnerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      limitedPartnerStatus: createLimitedPartnersStatus(),
      name: faker.string.alpha(),
    },
    ...data,
  };
}
