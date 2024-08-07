import { type Money } from "./Money";
import { type TransactionStatus } from "./TransactionStatus";
import { type TransactionType } from "./TransactionType";

export type Transaction = {
  amount: Money;
  /**
   * @type string, uuid
   */
  assetId: string;
  /**
   * @type string
   */
  description: string;
  /**
   * @type string | undefined
   */
  externalRef?: string;
  /**
   * @type string, uuid
   */
  fromCounterpartyId: string;
  /**
   * @type string
   */
  groupId: string;
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string, date-time
   */
  postedAt: string;
  status: TransactionStatus;
  /**
   * @type string, uuid
   */
  toCounterpartyId: string;
  type: TransactionType;
};
