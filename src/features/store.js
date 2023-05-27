import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        product : productSlice,
        cart : cartSlice,
       [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})