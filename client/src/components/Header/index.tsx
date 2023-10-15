/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './Top';
import { HeaderBody } from './Body';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryId } from '@redux/reducers/filter/reducer';
import { useSelector } from 'react-redux';
import { selectFilter } from '@redux/reducers/filter/selectors';
import { Catalog } from './Catalog';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const { categoryId } = useSelector(selectFilter);
  return (
    <header className={styles.root}>
      <HeaderTop />
      <HeaderBody />
      <Catalog categoryId={categoryId} onClickCatalog={onClickCatalog} />
    </header>
  );
};
