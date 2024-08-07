import { faker } from "@faker-js/faker";

import type { UpdateBankAccountRequest } from "../types/UpdateBankAccountRequest";

export function createUpdateBankAccountRequest(
  data: NonNullable<Partial<UpdateBankAccountRequest>> = {},
): NonNullable<UpdateBankAccountRequest> {
  faker.seed([100]);

  return {
    ...{
      accountHolder: faker.string.alpha(),
      accountNumber: faker.string.alpha(),
      accountType: faker.helpers.arrayElement<any>(["business", "individual"]),
      bankId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      iban: faker.string.alpha(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      limitedPartnerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      sortCode: faker.string.alpha(),
      swiftCode: faker.string.alpha(),
      type: faker.helpers.arrayElement<any>(["DOMESTIC", "INTERNATIONAL"]),
    },
    ...data,
  };
}
