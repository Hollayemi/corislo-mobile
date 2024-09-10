import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";
import { Routes } from "../../../../navigations/routes";

const addNewAddressApi = createAsyncThunk(
    "post/addNewAddressApi",
    async (payload: any) => {
        const { data } = await martApi
            .post("/user/address", payload, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const saveNewAddress = (
    payload: any,
    dispatch: any,
    navigation: any
) => {
    dispatch(addNewAddressApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/addresses");
            navigation.navigate(Routes.addresses);
        })
        .catch((e: any) => {});
};

const deleteAddHandler = createAsyncThunk(
    "post/deleteAddress",
    async (id: any) => {
        const { data } = await martApi
            .delete("/user/address/delete/" + id, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const deleteAddress = (id: any, dispatch: any, navigation: any) => {
  console.log(id);
    dispatch(deleteAddHandler(id))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            if (res.type === "success") {
                mutate("/user/addresses");
                mutate("/user/get-account");
                navigation.navigate(Routes.addresses);
            }
        })
        .catch((e: any) => {});
};
