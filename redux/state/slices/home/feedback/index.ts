import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";
import { mutate } from "swr";
import toaster from "../../../../../configs/toaster";

const newFeedback = createAsyncThunk(
    "post/newFeedback",
    async (payload: any) => {
        const { data } = await martApi
            .post("/product/feedback", payload, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const feedbackHandler = (payload: any, dispatch: any) => {
    dispatch(newFeedback(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/pending-reviews");
        })
        .catch((e: any) => {});
};

const newShopFeedback = createAsyncThunk(
    "post/shopFeedback",
    async (payload: any) => {
        const { data } = await martApi
            .post("/store/feedback", payload, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const shopFeedbackHandler = (payload: any, dispatch: any) => {
    dispatch(newShopFeedback(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            if (res.type === "success") {
                mutate(`/store/feedback/${payload.store}/${payload.branch}`);
            }
        })
        .catch((e: any) => {});
};
