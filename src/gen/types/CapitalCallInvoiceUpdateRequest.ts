import { type CapitalCallAmountType } from "./CapitalCallAmountType";

export type CapitalCallInvoiceUpdateRequest = {
  /**
   * @type number | undefined
   */
  amount?: number;
  /**
   * @type string | undefined, uuid
   */
  capitalCallId?: string;
  /**
   * @type string | undefined, date-time
   */
  paymentDate?: string;
  /**
   * @type string | undefined
   */
  paymentReference?: string;
  status?: CapitalCallAmountType;
  /**
   * @type string | undefined, uuid
   */
  subscriptionId?: string;
};
