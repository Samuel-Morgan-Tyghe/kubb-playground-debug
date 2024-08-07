import { faker } from "@faker-js/faker";

import type { HttpStatusCode } from "../types/HttpStatusCode";

export function createHttpStatusCode(
  data: NonNullable<Partial<HttpStatusCode>> = {},
): NonNullable<HttpStatusCode> {
  faker.seed([100]);

  return {
    ...{
      error: faker.datatype.boolean(),
      is1xxInformational: faker.datatype.boolean(),
      is2xxSuccessful: faker.datatype.boolean(),
      is3xxRedirection: faker.datatype.boolean(),
      is4xxClientError: faker.datatype.boolean(),
      is5xxServerError: faker.datatype.boolean(),
    },
    ...data,
  };
}
