import { type ErrorResponse } from "./ErrorResponse";

export type BasicApiResponse = {
  /**
   * @type object | undefined
   */
  data?: object;
  errors?: ErrorResponse;
  /**
   * @type object | undefined
   */
  meta?: {
    [key: string]: object;
  };
};
