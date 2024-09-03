import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const followStoreApi = (payload: any) =>
  createAsyncThunk("post/followStoreApi", async (payload1) => {
    const { data } = await martApi
      .post("/user/following", payload, jsonHeader(""))
      .then((res) => res)
      .catch((e) => e.response);
    return data;
  });

export const followStore = (
  payload: any,
  dispatch: any,
  socket: any,
  isIncluded: any
) => {
  dispatch(followStoreApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      socket.emit("createChatRoom", {
        branchId: payload?.branchId,
      });
      toaster({ ...res });
      mutate("/user/following");
    })
    .catch((e: any) => {});
};
