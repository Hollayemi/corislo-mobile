import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const updateAccountApi = createAsyncThunk(
    "post/updateUserAccount",
    async (payload: any) => {
        const { data } = await martApi
            .post("/user/update", payload, await jsonHeader(""))
            .then((res) => res)
            .catch((e) => e.response);
        return data;
    }
);

export const updateUserAccount = (payload: any, dispatch: any) => {
    dispatch(updateAccountApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/get-account");
        })
        .catch((e: any) => {});
};

const updatePictureApi = createAsyncThunk(
    "post/updateUserAccount",
    async (payload: any) => {
        const { data } = await martApi
            .post("/user/update-picture", payload, await jsonHeader(""))
            .then((res) => res)
            .catch((e) => e.response);
        return data;
    }
);

export const updateUserPicture = (
    payload: any,
    dispatch: any,
    setLoading: any
) => {
    setLoading(true);
    dispatch(updatePictureApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            console.log(res);
            mutate("/user/get-account");
            setLoading(false);
        })
        .catch((e: any) => {
            setLoading(false);
        });
};
//
//
//
