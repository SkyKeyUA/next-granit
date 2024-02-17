import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSliceState, Status } from './products.types';
import { IProduct } from '@customTypes/index';
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
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPages.pending, (state) => {
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.LOADING;
    });
    builder.addCase(fetchProductsPages.fulfilled, (state, action) => {
      state.products = action.payload.rows;
      state.count = action.payload.count;
      state.statusProducts = Status.SUCCESS;
    });
    builder.addCase(fetchProductsPages.rejected, (state) => {
      state.products = [];
      state.count = 0;
      state.statusProducts = Status.ERROR;
      console.log('There was an error');
    });
    builder.addCase(fetchRemoveProducts.pending, (state, action) => {
      state.products = state.products.filter((obj) => obj._id !== action.meta.arg);
    });
  },
});

export const { setProducts } = productsReducer.actions;

export default productsReducer.reducer;
