import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSliceState, Status } from './products.types';
import { Product } from '@customTypes/index';
import { fetchAllProducts, fetchProductsPages, fetchRemoveProduct } from './products.asyncActions';

const initialState: ProductsSliceState = {
  products: [],
  statusProducts: Status.LOADING,
  count: 0,
  error: null,
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
    builder.addCase(fetchProductsPages.rejected, (state, action) => {
      state.error = action.error;
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.ERROR;
      console.log('There was an error');
    });
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.LOADING;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload.rows;
      state.count = payload.count;
      state.statusProducts = Status.SUCCESS;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.error;
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.ERROR;
      console.log('There was an error');
    });
    builder.addCase(fetchRemoveProduct.pending, (state, { meta }) => {
      state.products = state.products.filter(({ id }) => id !== Number(meta.arg));
    });
    builder.addCase(fetchRemoveProduct.fulfilled, (state, { meta }) => {
      state.products = state.products.filter(({ id }) => id !== Number(meta.arg));
    });
  },
});

export const { setProducts } = productsReducer.actions;

export default productsReducer.reducer;
