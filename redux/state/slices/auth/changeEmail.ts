import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { userLogout } from "./Login";

const changeEmailApi = (payload: any) =>
  createAsyncThunk("post/RP", async (payload1) => {
    console.log(payload);
    const { data } = await martApi
      .post("/auth/change-email", payload, await jsonHeader(""))
      .then((res) => res)
      .catch((err) => err.response);

    return data;
  });

export const changeEmailHandler = (payload: any, dispatch: any) => {
  dispatch(changeEmailApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      console.log(res);
      toaster(res);
      if (res.type === "success") {
        dispatch(userLogout());
      }
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
