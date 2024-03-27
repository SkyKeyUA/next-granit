import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';
import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from '../Catalog/Catalog.component';
import { menuList } from './HeaderTop.constants';
import { Hamburger } from '@components/UI/Hamburger';
import { DynamicActions } from '@components/UI/Actions/Actions.component';

export const HeaderTopComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { Tablet } = useResponsive();
  const [categoryToggle, setCategoryToggle] = React.useState(false);
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
          <DynamicCatalog setCategoryToggle={setCategoryToggle} categoryToggle={categoryToggle} />
        </Tablet>
        <div className={`${styles.menu} ${menuOpen ? styles.menu_open : ''}`}>
          <nav className={styles.list}>
            <ul className={styles.items}>
              <li
                onClick={() => setCategoryToggle(!categoryToggle)}
                className={`${styles.item} ${styles.item_catalog}`}>
                Каталог товарів
              </li>
              {menuList.map(({ link, name }) => (
                <li key={name} className={styles.item}>
                  <Link href={link} className={styles.link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Tablet>
          <DynamicActions />
        </Tablet>
        <Hamburger
          setCategoryToggle={setCategoryToggle}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </div>
  );
};
