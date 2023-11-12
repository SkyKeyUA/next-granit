import { useAppSelector } from '@hooks/redux';

export const useFilterSelector = () => useAppSelector((state) => state.filter);
