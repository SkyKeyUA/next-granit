import React from 'react';

import styles from './HomePage.module.scss';
import { Product } from '@components/Product';
import { useAppDispatch } from '@hooks/redux';
import { fetchProductsPages } from '@redux/reducers/products/products.asyncActions';
import { useProductsSelector } from '@redux/reducers/products/products.selectors';
import { Pagination } from '@components/UI/Pagination';
import { setCurrentPage } from '@redux/reducers/filter/filter.reducer';

export const HomePageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, count, products } = useProductsSelector();
  const getProducts = () => {
    dispatch(fetchProductsPages(String(currentPage)));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      <Pagination currentPage={currentPage} count={count} onChangePage={onChangePage} />
      <div className={styles.inner}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
