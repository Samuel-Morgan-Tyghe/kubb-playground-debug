import { faker } from "@faker-js/faker";

import type { CapitalCallInvoiceUpdateRequest } from "../types/CapitalCallInvoiceUpdateRequest";

import { createCapitalCallAmountType } from "./createCapitalCallAmountType";

export function createCapitalCallInvoiceUpdateRequest(
  data: NonNullable<Partial<CapitalCallInvoiceUpdateRequest>> = {},
): NonNullable<CapitalCallInvoiceUpdateRequest> {
  faker.seed([100]);

  return {
    ...{
      amount: faker.number.float(),
      capitalCallId: faker.helpers.arrayElement<any>([
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
