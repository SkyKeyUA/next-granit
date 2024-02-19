import React from 'react';

import styles from './HomePage.module.scss';
import { Product } from '@components/Product';
import { useAppDispatch } from '@hooks/redux';
import { fetchProductsPages } from '@redux/reducers/products/products.asyncActions';
import { useSelector } from 'react-redux';
import { useProductsSelector } from '@redux/reducers/products/products.selectors';

export const HomePageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, products } = useProductsSelector();
  const getProducts = () => {
    dispatch(fetchProductsPages(String(currentPage)));
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      {products.map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};
