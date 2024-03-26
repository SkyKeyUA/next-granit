import { IconsEnum } from '@components/UI/SvgIcon';
import { SocialProps } from './Footer.types';

export const phoneNumbers = [
  { fullNumber: '+380675561977', shortNumber: '067-556-19-77' },
  { fullNumber: '+380669099669', shortNumber: '066-909-96-69' },
  { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
];
export const socialItems: SocialProps[] = [
  { link: 'telegram', social: IconsEnum.telegram },
  { link: 'facebook', social: IconsEnum.facebook },
  { link: 'instagram', social: IconsEnum.instagram },
  { link: 'viber', social: IconsEnum.viber },
];
