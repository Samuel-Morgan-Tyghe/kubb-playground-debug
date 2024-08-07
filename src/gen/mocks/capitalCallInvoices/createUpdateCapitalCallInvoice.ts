import { faker } from "@faker-js/faker";

import type {
  UpdateCapitalCallInvoice200,
  UpdateCapitalCallInvoiceMutationRequest,
  UpdateCapitalCallInvoiceMutationResponse,
  UpdateCapitalCallInvoicePathParams,
} from "../../types/capitalCallInvoices/UpdateCapitalCallInvoice";
import { createApiResponseCapitalCallInvoice } from "../createApiResponseCapitalCallInvoice";
import { createCapitalCallInvoiceUpdateRequest } from "../createCapitalCallInvoiceUpdateRequest";

export function createUpdateCapitalCallInvoicePathParams(): NonNullable<UpdateCapitalCallInvoicePathParams> {
  faker.seed([100]);

  return { capitalCallInvoiceId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createUpdateCapitalCallInvoice200(): NonNullable<UpdateCapitalCallInvoice200> {
  faker.seed([100]);

  return createApiResponseCapitalCallInvoice();
}

export function createUpdateCapitalCallInvoiceMutationRequest(): NonNullable<UpdateCapitalCallInvoiceMutationRequest> {
  faker.seed([100]);

  return createCapitalCallInvoiceUpdateRequest();
}

/**
 * @description OK
 */
export function createUpdateCapitalCallInvoiceMutationResponse(): NonNullable<UpdateCapitalCallInvoiceMutationResponse> {
  faker.seed([100]);

  return createApiResponseCapitalCallInvoice();
}
