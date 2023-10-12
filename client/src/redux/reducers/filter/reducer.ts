/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './type';

const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: '',
};

export const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSearchValue } = filterReducer.actions;

export default filterReducer.reducer;
