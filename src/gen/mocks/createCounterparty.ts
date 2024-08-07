import { faker } from "@faker-js/faker";

import type { Counterparty } from "../types/Counterparty";

import { createCounterpartyOwnerType } from "./createCounterpartyOwnerType";
import { createCounterpartyStatus } from "./createCounterpartyStatus";
import { createCurrency } from "./createCurrency";

export function createCounterparty(
  data: NonNullable<Partial<Counterparty>> = {},
): NonNullable<Counterparty> {
  faker.seed([100]);

  return {
    ...{
      currency: createCurrency(),
      name: faker.string.alpha(),
      ownerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      ownerType: createCounterpartyOwnerType(),
      status: createCounterpartyStatus(),
    },
    ...data,
  };
}
