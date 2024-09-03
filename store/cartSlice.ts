import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "auth",
  initialState: { cartLabel: "My Cart" },
  reducers: {
    setCartLabel(state, action) {
      state.cartLabel = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
