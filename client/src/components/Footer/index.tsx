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
          <div className={styles.inner}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.21311185368!2d30.934396807532934!3d50.354907832383944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e96d780837c1%3A0x667f6c5894fa655b!2z0J_QsNC8J9GP0YLQvdC40LrQuCDQtyDQs9GA0LDQvdGW0YLRgyDQstGW0LQg0LLQuNGA0L7QsdC90LjQutCw!5e0!3m2!1sru!2sca!4v1698460578557!5m2!1sru!2sca"
              width="750"
              height="600"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};
