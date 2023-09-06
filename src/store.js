import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "pages/ProductsList/productsListSlice";

const store = configureStore({
  reducer: {
    productsList: ProductsListReducer,
  },
});

export default store;
