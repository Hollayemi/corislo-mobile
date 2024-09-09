import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../../configs/toaster";
import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";
import { mutate } from "swr";

const addCartApi = createAsyncThunk("post/myCart", async (payload: any) => {
    console.log(payload);
    const { data } = await martApi
        .post("/user/cart", payload, await jsonHeader(""))
        .then((e) => e)
        .catch((e) => e.response);
    return data;
});

export const addCartHandler = (payload: any, dispatch: any) => {
    console.log(payload);
    dispatch(addCartApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            console.log(res);
            toaster({ ...res });
            if (res.type === "success") {
                mutate("/user/cart");
            }
        })
        .catch((e: any) => {});
};

const cartQuantityApi = createAsyncThunk(
    "post/cart-quantity",
    async (payload: any) => {
        const { data } = await martApi
            .get(
                `/user/cart-qty?id=${payload.id}&operator=${payload.operator}`,
                await jsonHeader("")
            )
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    }
);

export const changeQuantity = (payload: any, dispatch: any, newQty: any) => {
    newQty((res: any) => (payload.operator === "+" ? res + 1 : res - 1));
    dispatch(cartQuantityApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/cart");
        })
        .catch((e: any) => {});
};

const deleteBulkCartApi = (payload: any) =>
    createAsyncThunk("post/cart-quantity", async (payload1) => {
        const { data } = await martApi
            .post(`/user/cart/delete-bulk`, payload, await jsonHeader(""))
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    });

export const deleteBulkCart = (payload: any, dispatch: any) => {
    dispatch(deleteBulkCartApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/cart");
        })
        .catch((e: any) => {});
};

const saveProductApi = createAsyncThunk("post/myCart", async (payload: any) => {
    const { data } = await martApi
        .post("/user/save-item", payload, await jsonHeader(""))
        .then((e) => e)
        .catch((e) => e.response);
    return data;
});

export const saveProduct = (payload: any, dispatch: any) => {
    dispatch(saveProductApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            if (res.type === "success") {
                mutate("/user/saved-items/group");
                mutate("/user/save-item/prods");
            }
        })
        .catch((e: any) => {});
};

const savedQuantityApi = (payload: any) =>
    createAsyncThunk("post/cart-quantity", async (payload1) => {
        const { data } = await martApi
            .get(
                `/user/saved-item/qty?id=${payload.id}&operator=${payload.operator}`,
                await jsonHeader("")
            )
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    });

export const savedQuantity = (payload: any, dispatch: any, newQty: any) => {
    newQty((res: any) => (payload.operator === "+" ? res + 1 : res - 1));
    dispatch(savedQuantityApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/saved-items/group");
        })
        .catch((e: any) => {});
};

const deleteBulkSavedApi = (payload: any) =>
    createAsyncThunk("post/cart-quantity", async (payload1) => {
        const { data } = await martApi
            .post(
                `/user/saved-items/delete-bulk`,
                payload,
                await jsonHeader("")
            )
            .then((e) => e)
            .catch((e) => e.response);
        return data;
    });

export const deleteBulkSaved = (payload: any, dispatch: any) => {
    dispatch(deleteBulkSavedApi(payload))
        .then(unwrapResult)
        .then((res: any) => {
            toaster({ ...res });
            mutate("/user/saved-items/group");
        })
        .catch((e: any) => {});
};
