import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import tokens from "../../../../configs/tokens";
import { mutate } from "swr";
import { Routes } from "../../../../navigations/routes";

const addPickupAgent = createAsyncThunk(
    "post/addPickupAgent",
    async (payload: any) => {
        const { data } = await martApi
            .post("/user/pickup", payload, await jsonHeader(""))
            .then((res: any) => res)
            .catch((e: any) => e.response);
        return data;
    }
);

export const addPickupPerson = (
    formData: any,
    dispatch: any,
    navigation: any
) => {
    dispatch(addPickupAgent(formData))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            if(res.type === "success") {
              mutate("/user/pickers");
              navigation.navigate(Routes.pickers);
            }
        })
        .catch((e: any) => {});
};

//
// delete pickup agent
//
//
//
// delete pickup agent
const deletePickupAgent = createAsyncThunk(
    "post/deletePickup",
    async (payload: any) => {
        const userToken = tokens.auth;
        const { data } = await martApi
            .delete(`/user/pickup/${payload.id}`, await jsonHeader(""))
            .then((res: any) => res)
            .catch((e: any) => e);
        return data;
    }
);

export const deletePickupPerson = (formData: any, dispatch: any) => {
    dispatch(deletePickupAgent(formData))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/pickers");
        })
        .catch((e: any) => {});
};
