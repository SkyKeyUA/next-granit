import React from 'react';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryId, setSubCategoryId } from '@redux/reducers/filter/filter.reducer';
import { useFilterSelector } from '@redux/reducers/filter/filter.selectors';

import styles from './Catalog.module.scss';
import dynamic from 'next/dynamic';
import { categories } from './Catalog.constants';
import { CatalogProps } from './Catalog.type';
import { DynamicBackButton } from '@components/UI/Button/BackButton';
import { useResponsive } from '@hooks/useResponsive';

export const DynamicCatalog = dynamic(() =>
  import('@components/Header/Catalog').then((mod) => mod.Catalog),
);

export const CatalogComponent: React.FC<CatalogProps> = ({ setCategoryToggle, categoryToggle }) => {
  const { Tablet } = useResponsive();
  const dispatch = useAppDispatch();
  const { categoryId } = useFilterSelector();
  const [submenuCatalogToggle, setSubmenuCatalogToggle] = React.useState(false);
  const onClickCatalog = (idx: number) => {
    dispatch(setCategoryId(idx));
    setSubmenuCatalogToggle(!submenuCatalogToggle);
  };
  const onClickSubCatalog = (idx: number) => {
    dispatch(setSubCategoryId(idx));
  };
  return (
    <div className={`${styles.inner} ${categoryToggle ? `${styles.inner_open}` : ''}`}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          {setCategoryToggle && (
            <Tablet>
              <DynamicBackButton onClick={() => setCategoryToggle(false)} />
            </Tablet>
          )}
          <ul className={styles.items}>
            {categories.map(({ id, menuCatalog }) => (
              <li
                onClick={() => onClickCatalog(id)}
                key={id}
                className={`${styles.item} ${categoryId === id ? `${styles.item_open}` : ''}`}>
                {menuCatalog}
              </li>
            ))}
          </ul>
          {categories[categoryId].submenuCatalog && (
            <div
              className={`${styles.sub_body} ${
                submenuCatalogToggle ? `${styles.sub_body_open}` : ''
              }`}>
              <Tablet>
                <DynamicBackButton onClick={() => setSubmenuCatalogToggle(false)} />
              </Tablet>
              <ul className={styles.sub_items}>
                {categories[categoryId].submenuCatalog?.map((obj, index) => (
                  <li
                    key={index}
                    onClick={() => onClickSubCatalog(index)}
                    className={styles.sub_item}>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};
