import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/product/product-slice";
import usersSlice from "./features/user/users-slice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    user: usersSlice,
  },
});

export default store;
