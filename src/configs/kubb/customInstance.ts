import axios, { type AxiosError } from "axios";
import { type TFunction } from "i18next";

import { applyInterceptors } from "./interceptors";

export type ResponseError = {
  message: string[];
};
const getBaseURL = () => "https://dev-api.vega.investments";

export function formatKnownError(
  error: AxiosError<ResponseError>,
  t: TFunction,
) {
  return error.response?.data.message[0] || t("formValidation.unexpectedError");
}

export const axiosConfig = {
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60_000,
};

export const swaggerAxiosInstance = axios.create(axiosConfig);

applyInterceptors(swaggerAxiosInstance);
