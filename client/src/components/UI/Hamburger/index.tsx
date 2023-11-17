import React from 'react';

import styles from './Hamburger.module.scss';
import { HamburgerProps } from './Hamburger.types';

export const Hamburger: React.FC<HamburgerProps> = ({ setMenuOpen, menuOpen }) => {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      type="button"
      className={menuOpen ? `${styles['icon-menu']} ${styles['menu-open']}` : styles['icon-menu']}>
      <span></span>
    </button>
  );
};
