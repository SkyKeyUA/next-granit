import React from 'react';

import styles from './Hamburger.module.scss';
import { HamburgerProps } from './Hamburger.types';

export const HamburgerComponent: React.FC<HamburgerProps> = ({
  setMenuOpen,
  menuOpen,
  setCategoryToggle,
}) => {
  const handleButtonClick = () => {
    setCategoryToggle(false);
    setMenuOpen(!menuOpen);
  };
  return (
    <button
      onClick={handleButtonClick}
      type="button"
      className={menuOpen ? `${styles['icon-menu']} ${styles['menu-open']}` : styles['icon-menu']}>
      <span></span>
    </button>
  );
};
