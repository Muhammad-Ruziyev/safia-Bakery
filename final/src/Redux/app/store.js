import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice";
import cartSlice from "../Features/cartSlice";
import authSlice from "../Features/authSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
