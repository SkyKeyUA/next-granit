/** @format */

import React from 'react';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Input } from '@components/UI/Input';

import styles from './HeaderBody.module.scss';
import { SwitchThemeButton } from '@components/UI/Button';

const phoneNumber = [
  { fullNumber: '+380669099669', shortNumber: '066-909-96-69' },
  { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
];

export const HeaderBody = () => {
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
          <div className={styles.phones}>
            <div className={styles.items}>
              <Link href="tel:+380675561977" className={styles.phone}>
                067-556-19-77
              </Link>
              <button
                onClick={() => setOpenNumber(!openNumber)}
                type="button"
                className={`${styles.arrow} ${openNumber ? styles.arrow_open : ''}`}></button>
              <ul className={`${styles.list} ${openNumber ? styles.list_open : ''}`}>
                {phoneNumber.map((obj, index) => (
                  <li key={index}>
                    <Link href={`tel:${obj.fullNumber}`} className={styles.phone}>
                      {obj.shortNumber}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
