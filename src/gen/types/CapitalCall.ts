import { type CapitalCallAmountType } from "./CapitalCallAmountType";
import { type CapitalCallStatus } from "./CapitalCallStatus";
import { type CapitalCallType } from "./CapitalCallType";

export type CapitalCall = {
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
  /**
   * @type string, uuid
   */
  id: string;
  status: CapitalCallStatus;
  type: CapitalCallType;
};
