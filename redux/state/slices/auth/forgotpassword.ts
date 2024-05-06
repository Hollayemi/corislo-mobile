import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import toaster from "../../../../configs/toaster";

import martApi from "../api/baseApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const forgotPasswordApi = (payload: any) =>
  createAsyncThunk("post/FP", async (payload1) => {
    console.log(payload);
    const { data } = await martApi
      .post("/user/forgot-password", payload, {})
      .then((res) => res)
      .catch((err) => err.response);

    return data;
  });

export const ForgotPasswordHandler = (
  email: any,
  navigate: any,
  dispatch: any
) => {
  dispatch(forgotPasswordApi({ email }))
    .then(unwrapResult)
    .then(async (res: any) => {
      console.log(res);
      if (res.type === "success") {
        await AsyncStorage.setItem("sending-email-to", email);
        navigate("/email-sent");
      }
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
