/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './Top';
import { HeaderBody } from './Body';

import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from '@utils/dynamicImport';

export const Header: React.FC = () => {
  const { Desktop } = useResponsive();
  return (
    <header className={styles.root}>
      <HeaderTop />
      <HeaderBody />
      <Desktop>
        <DynamicCatalog />
      </Desktop>
    </header>
  );
};
