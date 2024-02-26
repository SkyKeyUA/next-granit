import React from 'react';

import styles from './HomePage.module.scss';
import { Product } from '@components/Product';
import { useAppDispatch } from '@hooks/redux';
import {
  fetchAllProducts,
  fetchProductsPages,
} from '@redux/reducers/products/products.asyncActions';
import { useProductsSelector } from '@redux/reducers/products/products.selectors';
import { Pagination } from '@components/UI/Pagination';
import { setCurrentPage } from '@redux/reducers/filter/filter.reducer';
import { useFilterSelector } from '@redux/reducers/filter/filter.selectors';

export const HomePageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, searchValue } = useFilterSelector();
  const { count, products } = useProductsSelector();
  const productsFilter = products.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  const getProductsPages = () => {
    dispatch(fetchProductsPages(String(currentPage)));
  };
  const getAllProducts = () => {
    dispatch(fetchAllProducts());
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  React.useEffect(() => {
    if (searchValue) return getAllProducts();

    return getProductsPages();
  }, [currentPage, searchValue]);
  return (
    <div className={styles.container}>
      {!searchValue && (
        <Pagination currentPage={currentPage} count={count} onChangePage={onChangePage} />
      )}
      <div className={styles.inner}>
        {productsFilter.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
