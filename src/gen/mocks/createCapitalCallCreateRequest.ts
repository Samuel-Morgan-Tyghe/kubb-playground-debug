import { faker } from "@faker-js/faker";

import type { CapitalCallCreateRequest } from "../types/CapitalCallCreateRequest";

import { createCapitalCallAmountType } from "./createCapitalCallAmountType";
import { createCapitalCallType } from "./createCapitalCallType";

export function createCapitalCallCreateRequest(
  data: NonNullable<Partial<CapitalCallCreateRequest>> = {},
): NonNullable<CapitalCallCreateRequest> {
  faker.seed([100]);

  return {
    ...{
      amount: faker.number.float(),
      amountType: createCapitalCallAmountType(),
      assetId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      dueDate: faker.date.anytime().toISOString(),
      type: createCapitalCallType(),
    },
    ...data,
  };
}
