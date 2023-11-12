/** @format */
/** @format */

import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';
import { Catalog } from '../Catalog';
import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from '@utils/dynamicImport';

const menuList = ['Про нас', 'Акції', 'Оплата та доставка', 'Контакти'];

export const HeaderTop: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className={
            menuOpen ? `${styles['icon-menu']} ${styles['menu-open']}` : styles['icon-menu']
          }>
          <span></span>
        </button>
        <Tablet>
          <DynamicCatalog />
        </Tablet>
        <div className={styles.menu}>
          <nav className={styles.body}>
            <ul className={styles.list}>
              {menuList.map((name, index) => (
                <li key={index} className={styles.item}>
                  <Link href="/" className={styles.link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
