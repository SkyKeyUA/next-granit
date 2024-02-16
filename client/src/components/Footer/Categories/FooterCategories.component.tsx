import React from 'react';

import styles from './FooterCategories.module.scss';
import dynamic from 'next/dynamic';
import { FooterCategoriesProps } from './FooterCategories.type';

export const DynamiFooterCategories = dynamic(() =>
  import('@components/Footer/Categories').then((mod) => mod.FooterCategories),
);

export const FooterCategoriesComponent: React.FC<FooterCategoriesProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.list}>
      <div className={styles.label}>{title}</div>
      <ul className={styles.items}>
        {subtitle.map((subMenu, i) => (
          <li className={styles.item} key={i}>
            {subMenu}
          </li>
        ))}
      </ul>
    </div>
  );
};
