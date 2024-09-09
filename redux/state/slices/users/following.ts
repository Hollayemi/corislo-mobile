import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import { mutate } from "swr";

const followStoreApi = createAsyncThunk(
    "post/followStoreApi",
    async (payload: any) => {
        const { data } = await martApi
            .post("/user/following", payload, await jsonHeader(""))
            .then((res) => res)
            .catch((e) => e.response);
        return data;
    }
);

export const followStore = (
    payload: any,
    dispatch: any,
    socket: any,
    isIncluded: any
) => {
    dispatch(followStoreApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            !isIncluded &&
                socket.emit("createChatRoom", {
                    branchId: payload?.branchId,
                });
              
            mutate("/user/following");
            mutate(
                `/branch/info?store=${payload.store}&branch=${payload.branch}`
            );
        })
        .catch((e: any) => {});
};