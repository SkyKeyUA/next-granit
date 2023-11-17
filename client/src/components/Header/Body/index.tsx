import React from 'react';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Input } from '@components/UI/Input';

import styles from './HeaderBody.module.scss';
import { SwitchThemeButton } from '@components/UI/Button';
import { phoneNumbers } from './HeaderBody.constants';
import { DropDownNumbers } from '@components/UI/PhoneNumbers/DropDownNumbers';

export const HeaderBody: React.FC = () => {
  const [openNumber, setOpenNumber] = React.useState(false);
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
        </Link>
        <Input />
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
      </div>
    </div>
  );
};
