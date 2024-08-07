import { faker } from "@faker-js/faker";

import type { Gender } from "../types/Gender";

export function createGender(): NonNullable<Gender> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>(["MALE", "FEMALE", "OTHER"]);
}
