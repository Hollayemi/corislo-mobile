import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import tokens from "../../../../configs/tokens";
import { urlBase64ToUint8Array } from "../api/webpush";

const addUserNotificationApi = (payload: any) =>
  createAsyncThunk("post/addUserNotificationApi", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .post("/user/notification", payload, jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e.response);
    return data;
  });

export const addUserNotification = (
  payload: any,
  auth: any,
  dispatch: any,
  setData: any
) => {
  dispatch(addUserNotificationApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      res.type === "success" && setData(res.data);
    })
    .catch((e: any) => {});
};

//
// delete pickup agent
const getUserNotificationApi = createAsyncThunk(
  "post/deletePickup",
  async (payload) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .get("/user/notification", jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e);
    return data;
  }
);

export const getUserNotification = (dispatch: any, setData: any) => {
  dispatch(getUserNotificationApi())
    .then(unwrapResult)
    .then((res: any) => {
      res.type === "success" && setData(res.data);
    })
    .catch((e: any) => {});
};
//
//
//
//
// delete pickup agent
const updateUserNotifApi = (payload: any) =>
  createAsyncThunk("post/updateNotif", async (payload1) => {
    const userToken = tokens.auth;
    const { data } = await martApi
      .patch(`/user/notification`, {}, jsonHeader(userToken!))
      .then((res: any) => res)
      .catch((e: any) => e);
    return data;
  });

export const updateUserNotif = (formData: any, dispatch: any, setData: any) => {
  // dispatch(updateUserNotifApi(payload))
  dispatch(updateUserNotifApi(formData))
    .then(unwrapResult)
    .then(async (res: any) => {
      res.status === "success" && setData(res.data);

      console.log(" Registering service worker ");
      const register = await navigator.serviceWorker.register(
        "../../../../../worker.js",
        { scope: "/" }
      );
      console.log(" Registering push ");
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.PUBLIC_VAPID_KEY
        ),
      });
    })
    .catch((e: any) => {});
};
