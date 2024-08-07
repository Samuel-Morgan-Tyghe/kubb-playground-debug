import { faker } from "@faker-js/faker";

import type { GeneralPartner } from "../types/GeneralPartner";

export function createGeneralPartner(
  data: NonNullable<Partial<GeneralPartner>> = {},
): NonNullable<GeneralPartner> {
  faker.seed([100]);

  return {
    ...{ id: faker.string.alpha(), name: faker.string.alpha() },
    ...data,
  };
}
