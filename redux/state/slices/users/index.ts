import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const userSelectionApi = (payload: any) =>
  createAsyncThunk("post/addNewAddressApi", async (payload1) => {
    const { data } = await martApi
      .post("/user/select", payload, jsonHeader(""))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const selectAsDefault = (payload: any, dispatch: any) => {
  dispatch(userSelectionApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      if (res.type === "success") {
        mutate("/user/get-account");
      }
    })
    .catch((e: any) => {});
};

//
