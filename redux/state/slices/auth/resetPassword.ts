import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { Routes } from "../../../../navigations/routes";

const resetPasswordApi = createAsyncThunk("post/RP", async (payload: any) => {
  console.log(payload);
  const { data } = await martApi
      .patch("/auth/reset-password", payload, {})
      .then((res) => res)
      .catch((err) => err.response);

  return data;
});

export const ResetPasswordHandler = (formData: any, navigation: any, dispatch: any) => {
    dispatch(resetPasswordApi(formData))
        .then(unwrapResult)
        .then((res: any) => {
            console.log(res);
            if (res.type === "success") {
                navigation.navigate(Routes.Login);
            }
        })
        .catch((err: any) => {
            toaster({ message: "No Connection", type: "error" });
        });
};

const changePasswordApi = createAsyncThunk(
  "post/changePassword",
  async (payload: any) => {
    console.log(payload);
    const { data } = await martApi
      .patch("/auth/change-password", payload, await jsonHeader(""))
      .then((res) => res)
      .catch((err) => err.response);

    return data;
  }
);

export const changePasswordHandler = (payload: any, dispatch: any) => {
  console.log(payload);
  dispatch(changePasswordApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      console.log(res)
      toaster(res);
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
