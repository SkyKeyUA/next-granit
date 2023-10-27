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
        <div className={styles.body}>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
            </Link>
            <div className={styles.title}>
              <Link href="/">
                <SvgIcon
                  src={IconsEnum.location}
                  style={{ height: '25px', width: '17', marginRight: '15px' }}
                />
                <span>м. Бориспіль, вул. Січнева 40Б</span>
              </Link>
            </div>
            <ul className={styles.list}>
              {phoneNumber.map((obj, index) => (
                <li className={styles.phone} key={index}>
                  <Link href={`tel:${obj.fullNumber}`}>
                    <SvgIcon src={IconsEnum.phone} size={25} style={{ marginRight: '15px' }} />
                    <span>{obj.shortNumber}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.inner}>Maps</div>
        </div>
      </div>
    </footer>
  );
};
