/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import { Card } from '@components/Card';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {[...Array(10)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};
