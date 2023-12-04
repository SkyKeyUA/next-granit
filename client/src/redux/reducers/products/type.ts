import { IProduct } from '@customTypes/index';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductsSliceState {
  products: IProduct[];
  statusProducts: Status;
}
