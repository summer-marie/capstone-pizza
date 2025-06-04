import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    // You can add removeFromCart, clearCart, etc. here
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;