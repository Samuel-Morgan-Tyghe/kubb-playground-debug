import { faker } from "@faker-js/faker";

import type { CounterpartyOwnerType } from "../types/CounterpartyOwnerType";

export function createCounterpartyOwnerType(): NonNullable<CounterpartyOwnerType> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["LIMITED_PARTNER", "ASSET"]);
}
