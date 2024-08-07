import { faker } from "@faker-js/faker";

import type {
  GetCapitalCallInvoices200,
  GetCapitalCallInvoicesQueryParams,
  GetCapitalCallInvoicesQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoices";
import { createApiResponseCapitalCallInvoice } from "../createApiResponseCapitalCallInvoice";

export function createGetCapitalCallInvoicesQueryParams(): NonNullable<GetCapitalCallInvoicesQueryParams> {
  faker.seed([100]);

  return {
    assetId: faker.string.alpha(),
    capitalCallId: faker.string.alpha(),
    counterpartyId: faker.string.alpha(),
  };
}

/**
 * @description OK
 */
export function createGetCapitalCallInvoices200(): NonNullable<GetCapitalCallInvoices200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseCapitalCallInvoice(),
  ]) as any;
}

/**
 * @description OK
 */
export function createGetCapitalCallInvoicesQueryResponse(): NonNullable<GetCapitalCallInvoicesQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([
    createApiResponseCapitalCallInvoice(),
  ]) as any;
}
