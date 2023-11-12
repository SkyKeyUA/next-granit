import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filter/reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
});
