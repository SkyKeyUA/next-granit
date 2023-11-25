import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './type';
import { HYDRATE } from 'next-redux-wrapper';

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
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.filter,
      };
    });
  },
});

export const { setCategoryId, setSearchValue } = filterReducer.actions;

export default filterReducer.reducer;
