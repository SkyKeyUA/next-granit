import React from 'react';

import styles from './Actions.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '../SvgIcon';
import { DropDownNumbers } from '../PhoneNumbers/DropDownNumbers';
import { SwitchThemeButton } from '../Button';
import { phoneNumbers } from '@components/Header/Body/HeaderBody.constants';
import dynamic from 'next/dynamic';

export const DynamicActions = dynamic(() =>
  import('@components/UI/Actions').then((mod) => mod.Actions),
);

export const Actions: React.FC = () => {
  return (
    <div className={styles.actions}>
      <Link href="/" className={styles.location}>
        <SvgIcon
          src={IconsEnum.location}
          style={{ height: '25px', width: '17', marginRight: '15px' }}
        />
        <span>Бориспіль</span>
      </Link>
      <DropDownNumbers phoneNumbers={phoneNumbers} />
      <Link href="/" className={styles.favourite}>
        <SvgIcon src={IconsEnum.favourite} style={{ width: '28px', height: '27px' }} />
        <span>10</span>
      </Link>
      <SwitchThemeButton />
    </div>
  );
};
