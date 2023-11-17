import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { categories, phoneNumbers } from './Footer.constants';
import { PhoneNumbers } from '@components/UI/PhoneNumbers';

export const Footer: React.FC = () => {
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
            <PhoneNumbers phoneNumbers={phoneNumbers} icon={IconsEnum.phone} />
          </div>
          <div className={styles.inner}>
            <div className={styles.info}>
              {categories.map((obj) => (
                <div key={obj.id} className={styles.list}>
                  <div className={styles.label}>{obj.menuCatalog}</div>
                  <ul className={styles.items}>
                    {obj.submenuCatalog.map((subMenu, i) => (
                      <li className={styles.item} key={i}>
                        {subMenu}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
