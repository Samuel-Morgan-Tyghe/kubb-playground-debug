import { faker } from "@faker-js/faker";

import type {
  GetCapitalCallInvoiceById200,
  GetCapitalCallInvoiceByIdPathParams,
  GetCapitalCallInvoiceByIdQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoiceById";
import { createApiResponseCapitalCallInvoice } from "../createApiResponseCapitalCallInvoice";

export function createGetCapitalCallInvoiceByIdPathParams(): NonNullable<GetCapitalCallInvoiceByIdPathParams> {
  faker.seed([100]);

  return { capitalCallInvoiceId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetCapitalCallInvoiceById200(): NonNullable<GetCapitalCallInvoiceById200> {
  faker.seed([100]);

  return createApiResponseCapitalCallInvoice();
}

/**
 * @description OK
 */
export function createGetCapitalCallInvoiceByIdQueryResponse(): NonNullable<GetCapitalCallInvoiceByIdQueryResponse> {
  faker.seed([100]);

  return createApiResponseCapitalCallInvoice();
}
