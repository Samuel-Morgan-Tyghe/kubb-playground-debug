import { faker } from "@faker-js/faker";

import type { Money } from "../types/Money";

import { createCurrency } from "./createCurrency";

export function createMoney(
  data: NonNullable<Partial<Money>> = {},
): NonNullable<Money> {
  faker.seed([100]);

  return {
    ...{ amount: faker.number.float(), currency: createCurrency() },
    ...data,
  };
}
