/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './Top';
import { HeaderBody } from './Body';

import { Catalog } from './Catalog';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <HeaderTop />
      <HeaderBody />
      <Catalog />
    </header>
  );
};
