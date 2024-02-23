import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filter/filter.reducer';
import productsReducer from './products/products.reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  products: productsReducer,
});
