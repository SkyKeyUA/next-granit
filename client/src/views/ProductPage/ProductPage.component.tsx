import React from 'react';

import styles from './ProductPage.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks/redux';
import { fetchProduct } from '@redux/reducers/products/products.asyncActions';

export const ProductPageComponent: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchProduct(String(id)));
  }, [id]);
  return <div>{id}</div>;
};
