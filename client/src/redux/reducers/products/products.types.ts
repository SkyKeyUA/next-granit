import { Product } from '@customTypes/index';

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
};

export type ProductsPages = {
  products: Product[];
  currentPage: number;
  count: number;
};
