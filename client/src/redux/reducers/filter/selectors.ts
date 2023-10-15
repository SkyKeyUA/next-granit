/** @format */

import { useAppSelector } from '@hooks/redux';
import { AppState } from '@redux/store';

export const selectFilter = () => useAppSelector((state) => state.filter);

export const selectFilter = (state: AppState) => state.filter;
