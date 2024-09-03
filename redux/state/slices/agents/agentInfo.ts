import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import martApi from "../api/baseApi";
import toaster from "../../../../configs/toaster";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

export const agentUpdateApi = (payload: any) =>
  createAsyncThunk("post/agentInfo", async (payload1) => {
    const { data } = await martApi
      .post("/agent/update", payload, await jsonHeader(""))
      .then((res) => res)
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
    return data;
  });

export const agentUpdateHandle = (dispatch: any, payload: any) => {
  dispatch(agentUpdateApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      mutate("/agent");
      toaster({ ...res });
    })
    .catch((err: any) => console.log(err));
};

//
export const withdrawApi = (payload: any) =>
  createAsyncThunk("post/withdraw", async (payload1) => {
    const { data } = await martApi
      .post("/withdraw", payload.body, {})
      .then((res) => res)
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
    return data;
  });
