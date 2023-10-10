/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './reducers';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);

export type AppThunk<ReturnType = void> = ThunkDispatch<ReturnType, void, AnyAction>;
