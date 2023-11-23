import React from 'react';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryId } from '@redux/reducers/filter/reducer';
import { useFilterSelector } from '@redux/reducers/filter/selectors';

import styles from './Catalog.module.scss';
import dynamic from 'next/dynamic';
import { categories } from './Catalog.constants';

export const DynamicCatalog = dynamic(() =>
  import('@components/Header/Catalog').then((mod) => mod.Catalog),
);

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const { categoryId, categoryToggle } = useFilterSelector();
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
            <ul className={styles.sub_list}>
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
