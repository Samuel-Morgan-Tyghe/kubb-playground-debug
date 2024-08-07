import { faker } from "@faker-js/faker";

import type { CapitalCall } from "../types/CapitalCall";

import { createCapitalCallAmountType } from "./createCapitalCallAmountType";
import { createCapitalCallStatus } from "./createCapitalCallStatus";
import { createCapitalCallType } from "./createCapitalCallType";

export function createCapitalCall(
  data: NonNullable<Partial<CapitalCall>> = {},
): NonNullable<CapitalCall> {
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
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      status: createCapitalCallStatus(),
      type: createCapitalCallType(),
    },
    ...data,
  };
}
