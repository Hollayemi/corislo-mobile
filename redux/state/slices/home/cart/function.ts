import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { loadCartGroup } from "./cartGroup";
import { jsonHeader } from "../../api/setAuthHeaders";
import martApi from "../../api/baseApi";
import tokens from "../../../../../configs/tokens";

const changeCartApi = (payload: any) =>
  createAsyncThunk("post/changeQty", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .patch("/user/cart-func/Qty", payload, await jsonHeader(userToken))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const changeQty = (payload: any, dispatch: any) => {
  console.log();
  dispatch(changeCartApi(payload))
    .then(unwrapResult)
    .then((res: any) => res.type === "success" && loadCartGroup(dispatch))
    .catch((e: any) => {});
};

const removeCartApi = (payload: any) =>
  createAsyncThunk("post/changeCart", async (payload1) => {
    console.log(payload, payload1);
    const { data } = await martApi
      .patch("/user/cart-func/remove", payload, {})
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const removeCartHandler = (payload: any, dispatch: any) => {
  dispatch(removeCartApi(payload))
    .then(unwrapResult)
    .then((res: any) => res.type === "success" && loadCartGroup(dispatch))
    .catch((e: any) => {});
};
