import { faker } from "@faker-js/faker";

import type { BankAccountRequest } from "../types/BankAccountRequest";

export function createBankAccountRequest(
  data: NonNullable<Partial<BankAccountRequest>> = {},
): NonNullable<BankAccountRequest> {
  faker.seed([100]);

  return {
    ...{
      accountType: faker.helpers.arrayElement<any>(["business", "individual"]),
      bankId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      type: faker.helpers.arrayElement<any>(["DOMESTIC", "INTERNATIONAL"]),
    },
    ...data,
  };
}
