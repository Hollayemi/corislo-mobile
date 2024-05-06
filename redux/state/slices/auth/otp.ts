import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../constants";
import martApi from "../api/baseApi";
import { getAccount } from "./Login";
import toaster from "../../../../configs/toaster";
import { mutate } from "swr";
import { jsonHeader } from "../api/setAuthHeaders";
import { Routes } from "../../../../navigations/routes";

export const otpVerificationApi = (payload: any) =>
  createAsyncThunk("post/RegNewUser", async (payload1) => {
    console.log(payload);
    const { data } = await martApi
      .post("/auth/verify", payload, await jsonHeader(""))
      .then((e) => {
        return e;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
    return data;
  });

export const verifyOtp = (payload: any, router: any, dispatch: any) => {
  dispatch(otpVerificationApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      console.log(res);
      toaster({ ...res });
      console.log("here");
      if (res.type === "success") {
        router.navigate(res.to || Routes.homeScreen);
      }
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};

const resendOtpApi = (payload: any) =>
  createAsyncThunk("post/resendOtp", async (payload1) => {
    const { data } = await martApi
      .post("/new/otp", payload)
      .then((e) => {
        return e;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
    return data;
  });

export const resendOtp = (payload: any, dispatch: any) => {
  dispatch(resendOtpApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      alert(res?.otp);
      toaster({ ...res });
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
