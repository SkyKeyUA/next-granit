import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ProductsServices } from '@services/ProductsServices';
import { ApiResponse, Product } from '@customTypes/index';

export const fetchProductsPages = createAsyncThunk<ApiResponse<Product>, string>(
  'products/fetchProductsPages',
  async (currentPage, { rejectWithValue }) => {
    try {
      const response = await ProductsServices.getProducts(currentPage);
      return response;
    } catch (e) {
      const err = e as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
export const fetchRemoveProduct = createAsyncThunk(
  'products/fetchRemoveProduct',
  async (id: string, { rejectWithValue }) => {
    try {
      await ProductsServices.removeProduct(id);
      return id;
    } catch (e) {
      const err = e as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
