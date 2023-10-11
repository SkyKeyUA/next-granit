/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './Top';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <HeaderTop />
    </header>
  );
};
