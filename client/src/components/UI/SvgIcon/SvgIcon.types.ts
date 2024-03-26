import { CSSProperties } from 'react';

export enum IconsEnum {
  logo = '/img/icons/logo.svg',
  arrow = '/img/icons/arrow.svg',
  btnremove = '/img/icons/btnremove.svg',
  cart = '/img/icons/cart.svg',
  favourite = '/img/icons/favourite.svg',
  location = '/img/icons/location.svg',
  search = '/img/icons/search.svg',
  user = '/img/icons/user.svg',
  like = '/img/icons/like.svg',
  phone = '/img/icons/phone.svg',
  help = '/img/icons/help.svg',
  info = '/img/icons/info.svg',
  loader = '/img/icons/loader.svg',
  moon = '/img/icons/moon.svg',
  sun = '/img/icons/sun.svg',
  back = '/img/icons/back.svg',
  compare = '/img/icons/compare.svg',
  facebook = '/img/icons/social/facebook.svg',
  instagram = '/img/icons/social/instagram.svg',
  telegram = '/img/icons/social/telegram.svg',
  viber = '/img/icons/social/viber.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
