import { faker } from "@faker-js/faker";

import type { LimitedPartnersStatus } from "../types/LimitedPartnersStatus";

export function createLimitedPartnersStatus(): NonNullable<LimitedPartnersStatus> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["CREATED", "ACTIVE", "DELETED"]);
}
