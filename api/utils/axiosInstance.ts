import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { API_BASE_URL, APP_KEY } from "./apiConfig";

// create axios instance with default settings

const axiosInstance: AxiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
            "Content-Type": "application/json",
            "x-api-key": APP_KEY,
      },
});

axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
            // we can add auth here
            return config;
      },
      (error: AxiosError) => {
            return Promise.reject(error);
      }
);

axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
            return res;
      },
      (error: AxiosError) => {
            return Promise.reject(error);
      }
);

export default axiosInstance;
