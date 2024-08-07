import { type AssetSource } from "./AssetSource";
import { type AssetValuationType } from "./AssetValuationType";
import { type Currency } from "./Currency";

export type AssetValuationRequest = {
  /**
   * @type string
   */
  asOf: string;
  assetValuationType: AssetValuationType;
  currency: Currency;
  source: AssetSource;
  /**
   * @type number
   */
  value: number;
};
