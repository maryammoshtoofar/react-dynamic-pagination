import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PagedProductReq } from "../../../api/products";

const initialState = {
  data: [],
  productsCount: 0,
  params: "_page=1&_limit=5",
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  PagedProductReq
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const { products, count, params } = action.payload;
      return {
        ...state,
        loading: false,
        data: products,
        productsCount: count,
        params: params,
      };
    });
  },
});

export default productsSlice.reducer;
