import { type AssetSource } from "./AssetSource";
import { type AssetValuationType } from "./AssetValuationType";
import { type Money } from "./Money";

export type AssetValuation = {
  /**
   * @type string
   */
  asOf: string;
  /**
   * @type string, uuid
   */
  assetId: string;
  assetValuationType: AssetValuationType;
  /**
   * @type string, uuid
   */
  id: string;
  source: AssetSource;
  valuation: Money;
};
