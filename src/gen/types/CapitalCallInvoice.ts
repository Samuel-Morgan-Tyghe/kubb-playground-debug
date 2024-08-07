import { type CapitalCallAmountType } from "./CapitalCallAmountType";

export type CapitalCallInvoice = {
  /**
   * @type number
   */
  amount: number;
  /**
   * @type string, uuid
   */
  capitalCallId: string;
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string | undefined, date-time
   */
  paymentDate?: string;
  /**
   * @type string
   */
  paymentReference: string;
  status: CapitalCallAmountType;
  /**
   * @type string, uuid
   */
  subscriptionId: string;
};
