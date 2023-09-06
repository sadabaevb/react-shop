const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: API } = require("requester");

const initialState = {
  list: [],
  hasMore: true,
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "productsList/get",
  async (params) => {
    const response = await API.get("products", { params });
    return response.data;
  }
);

const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.products.length === 0) {
        state.hasMore = false;
      }
      state.isLoading = false;
      state.list = [...state.list, ...action.payload.products];
    });
  },
});

export default productsListSlice.reducer;
