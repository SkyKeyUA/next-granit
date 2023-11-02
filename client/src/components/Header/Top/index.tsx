/** @format */
/** @format */

import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';

const menuList = [' Про нас', 'Акції', 'Оплата та доставка', 'Контакти'];

export const HeaderTop = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
        <div className={styles.menu}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className={
              menuOpen ? `${styles['icon-menu']} ${styles['menu-open']}` : styles['icon-menu']
            }>
            <span></span>
          </button>
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
