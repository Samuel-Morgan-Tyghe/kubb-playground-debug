import { faker } from "@faker-js/faker";

import type { CounterpartyCreateRequest } from "../types/CounterpartyCreateRequest";

import { createCounterpartyOwnerType } from "./createCounterpartyOwnerType";

export function createCounterpartyCreateRequest(
  data: NonNullable<Partial<CounterpartyCreateRequest>> = {},
): NonNullable<CounterpartyCreateRequest> {
  faker.seed([100]);

  return {
    ...{
      currency: faker.string.alpha(),
      name: faker.string.alpha(),
      ownerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      ownerType: createCounterpartyOwnerType(),
    },
    ...data,
  };
}
