import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';
import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from '../Catalog';
import { menuList } from './HeaderTop.constants';
import { Hamburger } from '@components/UI/Hamburger';
import { DynamicActions } from '@components/UI/Actions';
import { useFilterSelector } from '@redux/reducers/filter/selectors';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryToggle } from '@redux/reducers/filter/reducer';

export const HeaderTop: React.FC = () => {
  const dispatch = useAppDispatch();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { categoryToggle } = useFilterSelector();
  const { Tablet } = useResponsive();
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <Tablet>
          <DynamicCatalog />
        </Tablet>
        <div className={`${styles.menu} ${menuOpen ? styles.menu_open : ''}`}>
          <nav className={styles.list}>
            <ul className={styles.items}>
              {menuList.map((name, index) =>
                index === 0 ? (
                  <li
                    onClick={() => dispatch(setCategoryToggle(!categoryToggle))}
                    key={index}
                    className={`${styles.item} ${styles.item_catalog}`}>
                    {name}
                  </li>
                ) : (
                  <li key={index} className={styles.item}>
                    <Link href="/" className={styles.link}>
                      {name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
        <Tablet>
          <DynamicActions />
        </Tablet>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
};
