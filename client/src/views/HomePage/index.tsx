/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import { Product } from '@components/Product';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {[...Array(10)].map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};
