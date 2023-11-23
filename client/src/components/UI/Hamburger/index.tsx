import React from 'react';

import styles from './Hamburger.module.scss';
import { HamburgerProps } from './Hamburger.types';
import { useAppDispatch } from '@hooks/redux';
import { setCategoryToggle } from '@redux/reducers/filter/reducer';

export const Hamburger: React.FC<HamburgerProps> = ({ setMenuOpen, menuOpen }) => {
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch(setCategoryToggle(false));
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
