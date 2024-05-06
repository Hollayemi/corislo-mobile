import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";

const verifyApi = (payload: any) =>
  createAsyncThunk("post/VA", async (payload1) => {
    console.log(payload, payload1);
    const { data } = await martApi
      .patch(
        `/user/verify-account?token=${payload.token}&email=${payload.email}`,
        {},
        {}
      )
      .then((res) => res)
      .catch((err) => err.response);

    return data;
  });

export const VerifyHandler = (
  email: any,
  token: any,
  navigate: any,
  dispatch: any
) => {
  dispatch(verifyApi({ email, token }))
    .then(unwrapResult)
    .then((res: any) => {
      console.log(res);
      if (res.type === "success") {
        navigate("/login");
      }
      toaster({ ...res });
    })
    .catch((err: any) => {
      toaster({ message: "No Connection", type: "error" });
    });
};
