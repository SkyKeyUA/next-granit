/** @format */

import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Footer: React.FC = () => {
  const phoneNumber = [
    { fullNumber: '+380675561977', shortNumber: '067-556-19-77' },
    { fullNumber: '+380669099669', shortNumber: '066-909-96-69' },
    { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
  ];
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
          </Link>
        </div>
        <div className={styles.inner}>Наші вироби</div>
        <div className={styles.inner}>Послуги</div>
      </div>
    </footer>
  );
};
