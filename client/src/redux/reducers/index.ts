import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filter/filter.reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  products: productsReducer,
});
