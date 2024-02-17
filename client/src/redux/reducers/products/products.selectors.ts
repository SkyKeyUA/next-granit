import { useAppSelector } from '@hooks/redux';

export const useProductsSelector = () => useAppSelector((state) => state.products);
