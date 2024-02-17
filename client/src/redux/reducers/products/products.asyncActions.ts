import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsPages, SearchIProductsParams } from './products.types';
import axios, { AxiosError } from 'axios';
import { ProductsServices } from '@services/ProductsServices';
import { IProducts } from '@customTypes/index';

export const fetchProductsPages = createAsyncThunk<IProducts, SearchIProductsParams>(
  'products/fetchProductsPages',
  async (params: SearchIProductsParams, { rejectWithValue }) => {
    try {
      const { data } = await ProductsServices.getProducts(params);
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
