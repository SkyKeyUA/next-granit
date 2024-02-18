import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ProductsServices } from '@services/ProductsServices';
import { Products } from '@customTypes/index';

export const fetchProductsPages = createAsyncThunk<Products, string>(
  'products/fetchProductsPages',
  async (currentPage, { rejectWithValue }) => {
    try {
      const { data } = await ProductsServices.getProducts(currentPage);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
