import { API_BASE_URL, API_END_POINT } from "@/constants";
import { useAuth } from "@/context/Auth";
import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  default as axiosLibaray,
} from "axios";
import { useEffect } from "react";
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

    return response.data;
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
  const { auth, isItLogin, updateRefersh } = useAuth();
  const refersh = useRefreshToken();
  useEffect(() => {
    const requestInterceptor = axiosAuth.interceptors.request.use(
      (config) => {
        if (isItLogin) {
          console.log("adding auth to request headers");
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => new Promise(error)
    );

    const responseIntecropter = axiosAuth.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response.data;
      },
      async function (error: AxiosError) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.status === 401) {
          //handle new refersh token
          const beforeRequest = error?.config as AxiosRequestConfig & {
            weHaveTryBefore: boolean;
          };
          if (beforeRequest && !beforeRequest.weHaveTryBefore) {
            console.log("handle new refersh token");
            beforeRequest.weHaveTryBefore = true;
            const result = await refersh();

            if (result !== null) {
              updateRefersh(result.accessToken, result.refreshToken);

              // beforeRequest?.headers?. =`Bearer ${result.accessToken}`
              // beforeRequest.headers?.['Authorization'] = `Bearer ${newAccessToken}`;
              // beforeRequest.headers?.Authorization= `Bearer ${result.accessToken}`
              beforeRequest.headers = beforeRequest.headers || {}; // Ensure headers is defined
              console.log("before Edit", beforeRequest.headers.Authorization);
              beforeRequest.headers.Authorization = `Bearer ${result.accessToken}`;
              console.log("after Edit", beforeRequest.headers.Authorization);
              return await axiosAuth(beforeRequest);
            }
          }
        }
        return Promise.reject(error.response?.data);
      }
    );
    return () => {
      axiosAuth.interceptors.request.eject(requestInterceptor);
      axiosAuth.interceptors.response.eject(responseIntecropter);
    };
  }, [auth, refersh]);

  return axiosAuth;
};

export function useRefreshToken() {
  const { auth } = useAuth();
  const refresh = async () => {
    try {
      console.log("refreshToken in refreshToken", auth?.refreshToken);

      const reposne = await axios.post(API_END_POINT.REFERSH, {
        refreshToken: auth?.refreshToken,
      });

      return {
        accessToken: reposne.data.accessToken,
        refreshToken: reposne.data.refreshToken,
      };
    } catch (e) {
      const error = e as Error;
      console.log(error);
      console.log("Error To fetch get Refersh ");
      throw error;
    }
  };

  return refresh;
}

export { type AxiosResponse };
export { axios };
export default axios;
