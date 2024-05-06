import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const saveBillingApi = (payload: any) =>
  createAsyncThunk("post/saveBillingApi", async (payload1) => {
    const { data } = await martApi
      .post("/user/billing", payload, jsonHeader(""))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const saveBilling = (payload: any, dispatch: any) => {
  dispatch(saveBillingApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      mutate("/user/billings");
    })
    .catch((e: any) => {});
};

const deleteHandler = (id: any) =>
  createAsyncThunk("post/deleteBilling", async (id1) => {
    const { data } = await martApi
      .delete("/user/billing/delete/" + id, jsonHeader(""))
      .then((e: any) => e)
      .catch((e: any) => e.response);
    return data;
  });

export const deleteBilling = (id: any, dispatch: any) => {
  dispatch(deleteHandler(id))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      if (res.type === "success") {
        mutate("/user/billings");
      }
    })
    .catch((e: any) => {});
};
