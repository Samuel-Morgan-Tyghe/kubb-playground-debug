import type { AxiosInstance } from "axios";

const LocalStorageService = { getToken: () => "" } as any;

export function applyInterceptors(axiosInstance: AxiosInstance) {
  console.log("interceptors", axiosInstance);
}
