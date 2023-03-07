import { configureStore } from "@reduxjs/toolkit";
import  productsSlice from "./features/product/product-slice";


const store = configureStore({
  reducer: {
    // user: usersSlice,
    products: productsSlice,
  },
});

export default store;
