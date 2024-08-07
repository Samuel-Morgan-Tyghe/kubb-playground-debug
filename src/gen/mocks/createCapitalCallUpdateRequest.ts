import { faker } from "@faker-js/faker";

import type { CapitalCallUpdateRequest } from "../types/CapitalCallUpdateRequest";

import { createCapitalCallAmountType } from "./createCapitalCallAmountType";
import { createCapitalCallType } from "./createCapitalCallType";

export function createCapitalCallUpdateRequest(
  data: NonNullable<Partial<CapitalCallUpdateRequest>> = {},
): NonNullable<CapitalCallUpdateRequest> {
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
