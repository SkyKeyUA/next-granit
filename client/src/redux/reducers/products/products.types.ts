import { Product } from '@customTypes/index';
import { Serializable } from 'child_process';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ProductsSliceState = {
  products: Product[];
  statusProducts: Status;
  currentPage: number;
  count: number;
  error: null | Serializable;
};

export type ProductsPages = {
  products: Product[];
  currentPage: number;
  count: number;
};
