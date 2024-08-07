import { faker } from "@faker-js/faker";

import type { DefaultMode } from "../types/DefaultMode";

export function createDefaultMode(): NonNullable<DefaultMode> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["LIGHT", "DARK"]);
}
