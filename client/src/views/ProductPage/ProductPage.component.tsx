import React from 'react';

import styles from './ProductPage.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks/redux';
import { fetchProduct } from '@redux/reducers/products/products.asyncActions';
import { useProductsSelector } from '@redux/reducers/products/products.selectors';
import { baseURL } from '@api/index';
import Image from 'next/image';

export const ProductPageComponent: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { product } = useProductsSelector();
  React.useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchProduct(String(id)));
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
  const { title, content, image } = product;
  const imageUrl = `${baseURL}${image}`;
  return (
    <div style={{ position: 'relative' }}>
      <Image className={styles.img} src={imageUrl} alt="productImg" fill priority sizes="30vw" />
    </div>
  );
};
