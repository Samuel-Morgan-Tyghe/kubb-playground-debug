import { type Money } from "./Money";
import { type TransactionStatus } from "./TransactionStatus";
import { type TransactionType } from "./TransactionType";

export type TransactionUpdateRequest = {
  amount?: Money;
  /**
   * @type string | undefined, uuid
   */
  assetId?: string;
  /**
   * @type string | undefined
   */
  description?: string;
  /**
   * @type string | undefined, uuid
   */
  fromCounterpartyId?: string;
  /**
   * @type string | undefined, date-time
   */
  postedAt?: string;
  status?: TransactionStatus;
  /**
   * @type string | undefined, uuid
   */
  toCounterpartyId?: string;
  type?: TransactionType;
};
