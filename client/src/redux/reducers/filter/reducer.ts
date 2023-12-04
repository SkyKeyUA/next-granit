import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './type';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: '',
  totalPages: 0,
  currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.categoryId = action.payload.categoryId;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
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

export const { setCategoryId, setSearchValue, setTotalPages, setCurrentPage } =
  filterReducer.actions;

export default filterReducer.reducer;
