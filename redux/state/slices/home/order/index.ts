import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../../configs/toaster";
import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";
import { mutate } from "swr";
import { Routes } from "../../../../../navigations/routes";

const addOrderApi = createAsyncThunk("post/myOrder", async (payload: any) => {
    const { data } = await martApi
        .post("/user/order", payload, await jsonHeader(""))
        .then((e) => e)
        .catch((e) => e.response);
    return data;
});

export const addNewOrder = (payload: any, dispatch: any, navigation: any) => {
    dispatch(addOrderApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/order");
            navigation.navigate(Routes.orderConfirmation)
        })
        .catch((e: any) => {});
};

const deleteOrderApi = createAsyncThunk(
    "post/deleteOrder",
    async (payload: any) => {
        const { data } = await martApi
            .patch(`/user/delete-order/${payload}`, {}, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const deleteOrder = (orderId: any, dispatch: any) => {
    dispatch(deleteOrderApi(orderId))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/order");
        })
        .catch((e: any) => {});
};

const orderActionApi = createAsyncThunk(
    "patch/cancelOrder",
    async (payload: any) => {
        const { data } = await martApi
            .post(`/user/order-action`, payload, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const orderAction = (payload: any, dispatch: any) => {
    dispatch(orderActionApi(payload))
        .then(unwrapResult)
        .then(() => {
            payload.orderStatus &&
                mutate(`/user/order?status=${payload.orderStatus}`);
            mutate(`/user/order/${payload.orderId}`);
            mutate(`/user/order-count`);
            mutate(`/user/order-track?order=${payload.orderId}`);
        })
        .catch((e: any) => {});
};

const orderPriceApi = createAsyncThunk(
    "patch/orderPrice",
    async (payload: any) => {
        const { data } = await martApi
            .post(`/user/order-price`, payload, await jsonHeader())
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const orderPrice = (payload: any, dispatch: any, setResult: any) => {
    dispatch(orderPriceApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            res.type === "success" && setResult(res.data && res.data[0]);
        })
        .catch((e: any) => {});
};
