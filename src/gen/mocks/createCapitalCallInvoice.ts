import { faker } from "@faker-js/faker";

import type { CapitalCallInvoice } from "../types/CapitalCallInvoice";

import { createCapitalCallAmountType } from "./createCapitalCallAmountType";

export function createCapitalCallInvoice(
  data: NonNullable<Partial<CapitalCallInvoice>> = {},
): NonNullable<CapitalCallInvoice> {
  faker.seed([100]);

  return {
    ...{
      amount: faker.number.float(),
      capitalCallId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      paymentDate: faker.date.anytime().toISOString(),
      paymentReference: faker.string.alpha(),
      status: createCapitalCallAmountType(),
      subscriptionId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
    },
    ...data,
  };
}
