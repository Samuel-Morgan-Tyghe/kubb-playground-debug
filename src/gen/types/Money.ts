import { type Currency } from "./Currency";

export type Money = {
  /**
   * @type number
   */
  amount: number;
  currency: Currency;
};
