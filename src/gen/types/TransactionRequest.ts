import { type Money } from "./Money";

export enum TransactionRequestTransactionType {
  "DEPOSIT" = "DEPOSIT",
  "FEE" = "FEE",
  "INTEREST" = "INTEREST",
  "INVESTMENT" = "INVESTMENT",
  "TRANSFER" = "TRANSFER",
  "WITHDRAWAL" = "WITHDRAWAL",
}
export type TransactionRequest = {
  amount: Money;
  /**
   * @type string, uuid
   */
  bankAccountId: string;
  /**
   * @type string, uuid
   */
  fromAccountId: string;
  /**
   * @type string, uuid
   */
  groupId: string;
  /**
   * @type string, uuid
   */
  limitedPartnerId: string;
  /**
   * @type string, uuid
   */
  toAccountId: string;
  /**
   * @type string
   */
  transactionType: TransactionRequestTransactionType;
  /**
   * @type boolean
   */
  validTransfer: boolean;
  /**
   * @type boolean
   */
  validWithdrawal: boolean;
};
