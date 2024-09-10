import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import tokens from "../../../../configs/tokens";

const requestHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};
const authToken: string | undefined = tokens.auth!;

if (authToken) {
  requestHeaders.Authorization = `${authToken}`;
}
// let server = "https://corislo-backend.onrender.com/api/v1/";
let server = "http://192.168.22.43:5001/api/v1/";
if (process.env.NODE_ENV === "production") {
  console.log("in production");
  server = "https://corislo-backend.onrender.com/api/v1/";
}

const Axios: AxiosInstance = axios.create({
  baseURL: server,
  headers: requestHeaders,
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response: AxiosResponse) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      // Do something with response data
      return response;
  },
  function (error: AxiosError) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // if (parseInt(error?.response?.status) === 406) {
    //   window.location.href = "/dashboard/account?section=plans";
    // }
    // if (parseInt(error?.response?.status) === 401) {
    //   window.location.href = "/login";
    // }
    // handleResponseError(error.response);
    return Promise.reject(error);
  }
);

export { server };
export default Axios;
