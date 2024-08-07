import { faker } from "@faker-js/faker";

import type { CreateGeneralPartnerRequest } from "../types/CreateGeneralPartnerRequest";

import { createCurrency } from "./createCurrency";
import { createDefaultMode } from "./createDefaultMode";

export function createCreateGeneralPartnerRequest(
  data: NonNullable<Partial<CreateGeneralPartnerRequest>> = {},
): NonNullable<CreateGeneralPartnerRequest> {
  faker.seed([100]);

  return {
    ...{
      borderRadius: faker.string.alpha(),
      currency: createCurrency(),
      defaultMode: createDefaultMode(),
      email: faker.string.alpha(),
      footerText: faker.string.alpha(),
      isThemeToggleVisible: faker.datatype.boolean(),
      logoDark: faker.string.alpha(),
      logoLight: faker.string.alpha(),
      name: faker.string.alpha(),
      phone: faker.string.alpha(),
      primaryColour: faker.string.alpha(),
      privacyPolicy: faker.string.alpha(),
      riskWarning: faker.string.alpha(),
      smallLogo: faker.string.alpha(),
      smallLogoDark: faker.string.alpha(),
      smallLogoLight: faker.string.alpha(),
      termsAndConditions: faker.string.alpha(),
    },
    ...data,
  };
}
