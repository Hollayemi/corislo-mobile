import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import martApi from "../../api/baseApi";
import { jsonHeader } from "../../api/setAuthHeaders";
import { REQUEST_STATUS } from "../../constants";
import tokens from "../../../../../configs/tokens";

const cartGroup = createAsyncThunk("post/cartGroup", async () => {
  const userToken = tokens.auth;
  const { data } = await martApi
    .get("/user/cart-group", await jsonHeader(userToken))
    .then((e) => e)
    .catch((e) => e.response);
  return data;
});

const initialState = {
  groupData: {},
  status: "idle",
  error: "",
};

const cartGroupSlice = createSlice({
  name: "cartGroupSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cartGroup.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING; // Update status to pending
      })
      .addCase(cartGroup.fulfilled, (state, action) => {
        state.groupData = action.payload.data; // Update groupData with payload data
        state.status = REQUEST_STATUS.FULFILLED; // Update status to fulfilled
      })
      .addCase(cartGroup.rejected, (state) => {
        state.status = REQUEST_STATUS.REJECTED; // Update status to rejected
      });
  },
});

export default cartGroupSlice.reducer;

export const loadCartGroup = (dispatch: any) => {
  dispatch(cartGroup()).then(unwrapResult);
};
