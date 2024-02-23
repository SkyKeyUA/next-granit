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
  count: number;
  error: null | Serializable;
};

export type ProductsPages = {
  products: Product[];
  count: number;
};
