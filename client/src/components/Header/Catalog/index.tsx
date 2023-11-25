import React from 'react';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryId } from '@redux/reducers/filter/reducer';
import { useFilterSelector } from '@redux/reducers/filter/selectors';

import styles from './Catalog.module.scss';
import dynamic from 'next/dynamic';
import { categories } from './Catalog.constants';
import { CatalogProps } from './Catalog.type';

export const DynamicCatalog = dynamic(() =>
  import('@components/Header/Catalog').then((mod) => mod.Catalog),
);

export const Catalog: React.FC<CatalogProps> = ({ categoryToggle }) => {
  const dispatch = useAppDispatch();
  const { categoryId } = useFilterSelector();
  const [submenuCatalogToggle, setSubmenuCatalogToggle] = React.useState(false);
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
    setSubmenuCatalogToggle(!submenuCatalogToggle);
  }, []);
  return (
    <div className={`${styles.inner} ${categoryToggle ? `${styles.inner_open}` : ''}`}>
      <div className={styles.container}>
        <nav className={styles.menu}>
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
            <ul
              className={`${styles.sub_items} ${
                submenuCatalogToggle ? `${styles.sub_items_open}` : ''
              }`}>
              {categories[categoryId].submenuCatalog?.map((obj, index) => (
                <li key={index} className={styles.sub_item}>
                  {obj}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};
