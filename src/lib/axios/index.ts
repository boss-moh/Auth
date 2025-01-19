import { API_BASE_URL, API_END_POINT } from "@/constants";
import { useAuth } from "@/context/Auth";
import { AxiosError, AxiosResponse, default as axiosLibaray } from "axios";
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
  useEffect(() => {
    axiosAuth.interceptors.request.use(
      (config) => {
        if (isItLogin) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => new Promise(error)
    );
  }, [auth]);
  console.log("auth?.accessToken", auth?.accessToken);

  axiosAuth.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response.data;
    },
    async function (error: AxiosError) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("error auth", error);
      if (error.status === 401) {
        const result =
          (await getRefershToken({
            refreshToken: auth?.refreshToken,
          })) ?? [];
        updateRefersh(result[0], result[1]);
      }
      return Promise.reject(error.response?.data);
    }
  );
  return axiosAuth;
};

async function getRefershToken(data: unknown) {
  console.log("getRefershToken Run ");
  try {
    const reposne = await axios.post(API_END_POINT.REFERSH, data);
    console.log("reposne", reposne);
    return [reposne.data.accessToken, reposne.data.refreshToken];
  } catch {
    console.log("Error To fetch REfersh");
  }
}

export { type AxiosResponse };
export { axios };
export default axios;
