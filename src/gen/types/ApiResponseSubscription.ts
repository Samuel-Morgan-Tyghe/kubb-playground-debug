import { type BasicApiResponse } from "./BasicApiResponse";
import { type Subscription } from "./Subscription";

export type ApiResponseSubscription = BasicApiResponse & {
  data?: Subscription;
};
