import { type CapitalCallAmountType } from "./CapitalCallAmountType";
import { type CapitalCallType } from "./CapitalCallType";

export type CapitalCallCreateRequest = {
  /**
   * @type number
   */
  amount: number;
  amountType: CapitalCallAmountType;
  /**
   * @type string, uuid
   */
  assetId: string;
  /**
   * @type string, date-time
   */
  dueDate: string;
  type: CapitalCallType;
};
