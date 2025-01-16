import { API_BASE_URL } from "@/constants";
import { AxiosError, AxiosResponse, default as axiosLibaray } from "axios";
const axios = axiosLibaray.create({
  baseURL: API_BASE_URL,
  // timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
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

export { type AxiosResponse };
export { axios };
export default axios;
