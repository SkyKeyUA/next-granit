import { IProduct } from '@customTypes/index';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductsSliceState {
  products: IProduct[];
  statusProducts: Status;
  currentPage: number;
  count: number;
}

export interface ProductsPages {
  products: IProduct[];
  currentPage: number;
  count: number;
}

export type SearchIProductsParams = {
  currentPage: string;
};
