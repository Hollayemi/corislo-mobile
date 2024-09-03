import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "@/app/configs/toaster";
import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";

const storeLoginApi = createAsyncThunk("post/UserLogin", async (payload) => {
  const { data } = await martApi
    .post("/store/login", payload)
    .then((res) => {
      const { accessToken } = res.data;
      localStorage.setItem("store_token", accessToken);
      return res;
    })
    .catch((err) => err.response);

  return data;
});

export const getStaffAccount = createAsyncThunk("post/loginSlice", async () => {
  const { data } = await martApi
    .get(`/store/get-account`, jsonHeader())
    .then((res) => {
      const { accessToken } = res;
      localStorage.setItem("store_token", accessToken);
      return res;
    })
    .catch((e) => console.log(e.response));
  return data;
});

/*

*/

export const storeLoginHandler = (payload, router, dispatch) => {
  dispatch(storeLoginApi(payload))
    .then(unwrapResult)
    .then((res) => {
      toaster({ ...res });
      if (res.type === "success") {
        router.push("/store/dashboard");
      }
    })
    .catch((err) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
