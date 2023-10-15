/** @format */

import { CSSProperties } from 'react';

export enum IconsEnum {
  logo = 'img/icons/logo.svg',
  arrow = 'img/icons/arrow.svg',
  btnremove = 'img/icons/btnremove.svg',
  cart = 'img/icons/cart.svg',
  favourite = 'img/icons/favourite.svg',
  location = 'img/icons/location.svg',
  search = 'img/icons/search.svg',
  user = 'img/icons/user.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
