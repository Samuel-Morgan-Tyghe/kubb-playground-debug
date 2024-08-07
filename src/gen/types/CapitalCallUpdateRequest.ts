import { type CapitalCallAmountType } from "./CapitalCallAmountType";
import { type CapitalCallType } from "./CapitalCallType";

export type CapitalCallUpdateRequest = {
  /**
   * @type number | undefined
   */
  amount?: number;
  amountType?: CapitalCallAmountType;
  /**
   * @type string | undefined, uuid
   */
  assetId?: string;
  /**
   * @type string | undefined, date-time
   */
  dueDate?: string;
  type?: CapitalCallType;
};
