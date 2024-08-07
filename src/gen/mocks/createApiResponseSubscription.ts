import { faker } from "@faker-js/faker";

import type { ApiResponseSubscription } from "../types/ApiResponseSubscription";

import { createBasicApiResponse } from "./createBasicApiResponse";
import { createSubscription } from "./createSubscription";

export function createApiResponseSubscription(
  data?: NonNullable<Partial<ApiResponseSubscription>>,
): NonNullable<ApiResponseSubscription> {
  faker.seed([100]);

  return Object.assign({}, createBasicApiResponse(), {
    data: createSubscription(),
  });
}
