import { faker } from "@faker-js/faker";

import type { CounterpartyUpdateRequest } from "../types/CounterpartyUpdateRequest";

import { createCounterpartyOwnerType } from "./createCounterpartyOwnerType";
import { createCounterpartyStatus } from "./createCounterpartyStatus";
import { createCurrency } from "./createCurrency";

export function createCounterpartyUpdateRequest(
  data: NonNullable<Partial<CounterpartyUpdateRequest>> = {},
): NonNullable<CounterpartyUpdateRequest> {
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
