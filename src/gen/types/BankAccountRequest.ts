export enum BankAccountRequestType {
  "DOMESTIC" = "DOMESTIC",
  "INTERNATIONAL" = "INTERNATIONAL",
}
export enum BankAccountRequestAccountType {
  "business" = "business",
  "individual" = "individual",
}
export type BankAccountRequest = {
  /**
   * @type string
   */
  accountType: BankAccountRequestAccountType;
  /**
   * @type string, uuid
   */
  bankId: string;
  /**
   * @type string
   */
  type: BankAccountRequestType;
};
