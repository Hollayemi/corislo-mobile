import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import tokens from "../../../../configs/tokens";

const addPickupAgent = (payload: any) =>
  createAsyncThunk("post/addPickupAgent", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .post("/user/pickup", payload.body, jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e.response);
    return data;
  });

export const addPickupPerson = (
  formData: any,
  auth: any,
  dispatch: any,
  setData: any
) => {
  const payload = {
    body: formData,
    auth,
  };
  dispatch(addPickupAgent(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      res.type === "success" && window.location.reload();
    })
    .catch((e: any) => {});
};

//
// delete pickup agent
const myPickupsApi = (payload: any) =>
  createAsyncThunk("post/deletePickup", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .get("/user/pickup", jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e);
    return data;
  });

export const getPickupPerson = (
  formData: any,
  auth: any,
  dispatch: any,
  setData: any
) => {
  const payload = {
    id: formData,
    auth,
  };
  dispatch(myPickupsApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      res.type === "success" && setData(res.data);
    })
    .catch((e: any) => {});
};
//
//
//
//
// delete pickup agent
const deletePickupAgent = (payload: any) =>
  createAsyncThunk("post/deletePickup", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .delete(`/user/pickup/${payload.id}`, jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e);
    return data;
  });

export const deletePickupPerson = (
  formData: any,
  auth: any,
  dispatch: any,
  setData: any
) => {
  const payload = {
    id: formData,
    auth,
  };
  dispatch(deletePickupAgent(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      res.type === "success" && window.location.reload();
    })
    .catch((e: any) => {});
};
