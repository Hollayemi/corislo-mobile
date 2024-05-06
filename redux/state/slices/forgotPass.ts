import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import martApi from "./api/baseApi";
import toaster from "../../../configs/toaster";

const forgotPass = (payload: any) =>
  createAsyncThunk("post/forgotPassword", async (payload1) => {
    const { data } = await martApi
      .post("/user/forgot-password", payload, {})
      .then((res: any) => res)
      .catch((err: any) => err.response);

    return data;
  });

export const forgotPassHandler = (formData: any, dispatch: any) => {
  dispatch(forgotPass(formData))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
    })
    .catch((err: any) => {
      console.log(err.response);
    });
};
