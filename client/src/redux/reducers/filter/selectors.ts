/** @format */

import { useAppSelector } from '@hooks/redux';

export const selectFilter = () => useAppSelector((state) => state);
