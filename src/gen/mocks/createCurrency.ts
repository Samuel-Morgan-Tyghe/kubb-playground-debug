import { faker } from "@faker-js/faker";

import type { Currency } from "../types/Currency";

export function createCurrency(): NonNullable<Currency> {
  faker.seed([100]);

  return faker.helpers.arrayElement<any>([
    "GBP",
    "USD",
    "EUR",
    "AUD",
    "JPY",
    "CAD",
    "CNY",
    "CHF",
    "SEK",
    "NZD",
    "MXN",
    "SGD",
    "HKD",
    "NOK",
    "KRW",
    "TRY",
    "INR",
    "RUB",
    "BRL",
    "ZAR",
    "GBX",
    "DKK",
    "PLN",
    "HUF",
    "CZK",
    "HRK",
    "BGN",
    "ISK",
    "RSD",
  ]);
}
