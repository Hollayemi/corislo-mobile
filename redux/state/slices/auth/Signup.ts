import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../constants";
import martApi from "../api/baseApi";
import { getAccount } from "./Login";
import toaster from "../../../../configs/toaster";
import { mutate } from "swr";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Routes } from "../../../../navigations/routes";

export const RegNewUser = (payload: any) =>
  createAsyncThunk("post/RegNewUser", async (payload1) => {
    console.log(payload);
    const { data } = await martApi
      .post("/auth/create-account", payload, {})
      .then(async (e) => {
        console.log(e);
        const { token } = e.data;
        await AsyncStorage.setItem("user_token", token);
        return e;
      })
      .catch((err) => {
        console.log(err);
        // toaster({
        //   type: "error",
        //   message: err.message || "error occured while registering account",
        // });
        return err.response;
      });
    return data;
  });

export const registerHandler = (payload: any, router: any, dispatch: any) => {
  dispatch(RegNewUser(payload))
    .then(unwrapResult)
    .then(async (res: any) => {
      console.log(res);
      toaster({ ...res });
      console.log("here");
      if (res.type === "success") {
        console.log("register successful");
        if (await mutate("/user/get-account"))
          console.log("register mutation successful");
        router.navigate(Routes.AuthenticationVerify);
      }
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
