import { faker } from "@faker-js/faker";

import type { OwnerType } from "../types/OwnerType";

export function createOwnerType(): NonNullable<OwnerType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "LIMITED_PARTNER",
    "GENERAL_PARTNER",
  ]);
}
