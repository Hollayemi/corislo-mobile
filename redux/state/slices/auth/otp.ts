import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../constants";
import martApi from "../api/baseApi";
import { getAccount } from "./Login";
import toaster from "../../../../configs/toaster";
import { mutate } from "swr";
import { jsonHeader } from "../api/setAuthHeaders";
import { Routes } from "../../../../navigations/routes";

export const otpVerificationApi = createAsyncThunk(
    "post/RegNewUser",
    async (payload: any) => {
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
    }
);

export const verifyOtp = (
    payload: any,
    router: any,
    dispatch: any,
    type: string
) => {
    console.log(payload, "jkjaslajs");
    dispatch(otpVerificationApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });

            if (res.type === "success") {
                type === "create"
                    ? router.navigate(Routes.AccountCreated)
                    : type === "update"
                    ? router.navigate(Routes.updatePassword, {
                          token: res.data.token,
                      })
                    : null;
            }
        })
        .catch((err: any) => {
            toaster({ message: "No Connection", type: "error" });
        });
};

const resendOtpApi = createAsyncThunk(
    "post/resendOtp",
    async (payload: any) => {
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
    }
);

export const resendOtp = (payload: any, dispatch: any) => {
    dispatch(resendOtpApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            alert(res?.otp);
        })
        .catch((err: any) => {
            toaster({ message: "No Connection", type: "error" });
        });
};
