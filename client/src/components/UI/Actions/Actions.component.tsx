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

export const ActionsComponent: React.FC = () => {
  return (
    <div className={styles.actions}>
      <Link href="/" className={styles.location}>
        <SvgIcon
          className={styles.svg}
          src={IconsEnum.location}
          style={{ width: '25px', height: '36px' }}
        />
        <span>Бориспіль</span>
      </Link>
      <DropDownNumbers phoneNumbers={phoneNumbers} />
      <Link href="/" className={styles.compare}>
        <SvgIcon src={IconsEnum.compare} style={{ width: '41px', height: '36px' }} />
        <span>1</span>
      </Link>
      <SwitchThemeButton />
    </div>
  );
};
