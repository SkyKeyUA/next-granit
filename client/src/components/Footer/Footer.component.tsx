import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { phoneNumbers, socialItems } from './Footer.constants';
import { PhoneNumbers } from '@components/UI/PhoneNumbers';

export const FooterComponent: React.FC = () => {
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
                  style={{ height: '25px', width: '17', marginRight: '23px' }}
                />
                <span>м. Бориспіль, вул. Січнева 40Б</span>
              </Link>
            </div>
            <PhoneNumbers phoneNumbers={phoneNumbers} icon={IconsEnum.phone} />
          </div>
          <div>
            <div className={styles.callback}>Замовити виклик</div>
            <div className={styles.social}>
              {socialItems.map(({ link, social }) => (
                <Link key={social} href="/">
                  <SvgIcon size={36} src={social} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
