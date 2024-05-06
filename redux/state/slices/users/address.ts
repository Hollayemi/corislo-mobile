import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const addNewAddressApi = (payload: any) =>
  createAsyncThunk("post/addNewAddressApi", async (payload1) => {
    const { data } = await martApi
      .post("/user/address", payload, jsonHeader(""))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const saveNewAddress = (payload: any, dispatch: any) => {
  dispatch(addNewAddressApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      mutate("/user/addresses");
    })
    .catch((e: any) => {});
};

const deleteAddHandler = (id: any) =>
  createAsyncThunk("post/deleteAddress", async (id1) => {
    const { data } = await martApi
      .delete("/user/address/delete/" + id, jsonHeader(""))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const deleteAddress = (id: any, dispatch: any) => {
  dispatch(deleteAddHandler(id))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      if (res.type === "success") {
        mutate("/user/addresses");
        mutate("/user/get-account");
      }
    })
    .catch((e: any) => {});
};
