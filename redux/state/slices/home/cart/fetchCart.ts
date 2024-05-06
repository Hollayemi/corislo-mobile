import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";
import { REQUEST_STATUS } from "../../constants";
import tokens from "../../../../../configs/tokens";

export const myCart = createAsyncThunk("post/getMyCarts", async () => {
  const userToken = tokens.auth;
  const { data } = await martApi
    .get("/user/cart", await jsonHeader(userToken))
    .then((e) => e)
    .catch((e) => e.response);
  return data;
});

const initialState = {
  cartData: {},
  status: "idle",
  error: "",
};

const myCartSlice = createSlice({
  name: "myCartSlice",
  initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(myCart.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
      })
      .addCase(myCart.fulfilled, (state, { payload }) => {
        (state.cartData = payload.data),
          (state.status = REQUEST_STATUS.FULFILLED);
      })
      .addCase(myCart.rejected, (state) => {
        state.status = REQUEST_STATUS.REJECTED;
      });
  },
});

export const { clearCart } = myCartSlice.actions;
export default myCartSlice.reducer;

export const FetchCartHandler = (dispatch: any, setState: any) => {
  dispatch(myCart())
    .then(unwrapResult)
    .then((res: any) => {
      if (res.type === "success") {
        setState && setState(res.data);
      }
    })
    .catch((e: any) => {});
};
