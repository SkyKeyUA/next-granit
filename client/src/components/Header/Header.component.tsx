import React from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './Top';

import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from './Catalog/Catalog.component';
import { HeaderBody } from './Body';

export const HeaderComponent: React.FC = () => {
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
