import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Products, ProductsSliceState, Status } from './type';

const initialState: ProductsSliceState = {
  products: [],
  statusProducts: Status.LOADING,
};

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Products[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPages.pending, (state) => {
      state.products = [];
      state.statusProducts = Status.LOADING;
    });
    builder.addCase(fetchProductsPages.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.statusProducts = Status.SUCCESS;
    });
    builder.addCase(fetchProductsPages.rejected, (state) => {
      state.products = [];
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
