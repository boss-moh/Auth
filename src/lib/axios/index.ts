import { API_BASE_URL, API_END_POINT, tokensType } from "@/constants";
import { useAuth } from "@/context/Auth";
import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  default as axiosLibaray,
} from "axios";
import { useEffect, useRef } from "react";
const axios = axiosLibaray.create({
  baseURL: API_BASE_URL,
  // timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  // withCredentials: true,
});

axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data?.data;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response?.data);
  }
);

const axiosAuth = axiosLibaray.create({
  baseURL: API_BASE_URL,
  // timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  // withCredentials: true,
});

export const useAxiosWithAuth = () => {
  const retryCount = useRef(0);

  const { auth, hasAuth, updateTokens } = useAuth();
  const refersh = useRefreshToken();
  useEffect(() => {
    const requestInterceptor = axiosAuth.interceptors.request.use(
      (config) => {
        if (hasAuth && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => new Promise(error)
    );

    const responseIntecropter = axiosAuth.interceptors.response.use(
      (response) => {
        return response.data?.data;
      },
      async function (error: AxiosError) {
        const originalRequest = error.config as AxiosRequestConfig;

        // Check if error is 401 and we haven't tried refreshing yet
        if (error.response?.status === 401 && retryCount.current === 0) {
          try {
            retryCount.current = 1;
            const result = await refersh();

            if (result) {
              updateTokens(result);

              // Update the authorization header
              originalRequest.headers = {
                ...originalRequest.headers,
                Authorization: `Bearer ${result.accessToken}`,
              };

              // Retry the original request with new token
              return axiosAuth(originalRequest);
            }
          } catch {
            // If refresh token fails, reject with original error
            return Promise.reject(error.response?.data);
          }
        }

        return Promise.reject(error.response?.data);
      }
    );
    return () => {
      retryCount.current = 0;
      axiosAuth.interceptors.request.eject(requestInterceptor);
      axiosAuth.interceptors.response.eject(responseIntecropter);
    };
  }, [auth]);

  return axiosAuth;
};

export function useRefreshToken() {
  const { auth } = useAuth();

  const refresh = async () => {
    if (!auth?.refreshToken) {
      throw new Error("No refresh token available");
    }

    try {
      const response = await axios.post<null, tokensType>(
        API_END_POINT.REFERSH,
        { refreshToken: auth.refreshToken }
      );

      return {
        accessToken: response?.accessToken,
        refreshToken: response.refreshToken,
      };
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw error;
    }
  };

  return refresh;
}

export { type AxiosResponse };
export { axios };
export default axios;
