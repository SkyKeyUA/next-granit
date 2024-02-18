import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSliceState, Status } from './products.types';
import { Product } from '@customTypes/index';
import { fetchProductsPages } from './products.asyncActions';

const initialState: ProductsSliceState = {
  products: [],
  statusProducts: Status.LOADING,
  currentPage: 0,
  count: 0,
};

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }: PayloadAction<Product[]>) {
      state.products = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPages.pending, (state) => {
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.LOADING;
    });
    builder.addCase(fetchProductsPages.fulfilled, (state, { payload }) => {
      state.products = payload.rows;
      state.count = payload.count;
      state.statusProducts = Status.SUCCESS;
    });
    builder.addCase(fetchProductsPages.rejected, (state) => {
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.ERROR;
      console.log('There was an error');
    });
    builder.addCase(fetchRemoveProducts.pending, (state, { meta }) => {
      state.products = state.products.filter((obj) => obj._id !== meta.arg);
    });
  },
});

export const { setProducts } = productsReducer.actions;

export default productsReducer.reducer;
