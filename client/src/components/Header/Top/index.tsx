import React from 'react';

import styles from './HeaderTop.module.scss';
import Link from 'next/link';
import { useResponsive } from '@hooks/useResponsive';
import { DynamicCatalog } from '../Catalog';
import { menuList } from './HeaderTop.constants';
import { Hamburger } from '@components/UI/Hamburger';
import { DynamicActions } from '@components/UI/Actions';

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
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && (
          <Tablet>
            <DynamicCatalog />
          </Tablet>
        )}
        <div className={`${styles.menu} ${menuOpen ? styles.menu_open : ''}`}>
          <nav className={styles.list}>
            <ul className={styles.items}>
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
        <Tablet>
          <DynamicActions />
        </Tablet>
      </div>
    </div>
  );
};
