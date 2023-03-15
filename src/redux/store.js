import { configureStore } from "@reduxjs/toolkit";
import  productsSlice from "./features/product/product-slice";


const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
