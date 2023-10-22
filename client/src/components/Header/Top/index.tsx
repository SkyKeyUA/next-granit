/** @format */
/** @format */

import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';

export const HeaderTop = () => {
  const menuList = [' Про нас', 'Акції', 'Оплата та доставка', 'Контакти'];
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
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
