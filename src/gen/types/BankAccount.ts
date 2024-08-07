export enum BankAccountType {
  "DOMESTIC" = "DOMESTIC",
  "INTERNATIONAL" = "INTERNATIONAL",
}
export enum BankAccountAccountType {
  "business" = "business",
  "individual" = "individual",
}
export type BankAccount = {
  /**
   * @type string
   */
  accountHolder: string;
  /**
   * @type string
   */
  accountNumber: string;
  /**
   * @type string
   */
  accountType: BankAccountAccountType;
  /**
   * @type string, uuid
   */
  bankId: string;
  /**
   * @type string
   */
  iban: string;
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string, uuid
   */
  limitedPartnerId: string;
  /**
   * @type string
   */
  sortCode: string;
  /**
   * @type string
   */
  swiftCode: string;
  /**
   * @type string
   */
  type: BankAccountType;
};
