/** @format */

import React from 'react';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Input } from '@components/Common/Input';

import styles from './HeaderBody.module.scss';

export const HeaderBody = () => {
  const phoneNumber = [
    { fullNumber: '+380669099669', shortNumber: '066-909-96-69' },
    { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
  ];
  const [openNumber, setOpenNumber] = React.useState(false);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
        </Link>
        <Input />
        <div className="body-header__actions actions-header">
          <Link href="/" className="actions-header__location">
            <SvgIcon
              src={IconsEnum.location}
              style={{ height: '25px', width: '17', marginRight: '15px' }}
            />
            <span>Бориспіль</span>
          </Link>
          <div className="actions-header__phones phones-header">
            <div className="phones-header__items">
              <Link href="tel:+380675561977" className="phones-header__phone">
                067-556-19-77
              </Link>
              <button
                onClick={() => setOpenNumber(!openNumber)}
                type="button"
                className={`phones-header__arrow ${openNumber ? 'open' : ''}`}>
                <SvgIcon src={IconsEnum.arrow} style={{ width: '16px', height: '10px' }} />
              </button>
              <ul className={`phones-header__list ${openNumber ? 'open' : ''}`}>
                {phoneNumber.map((obj, index) => (
                  <li key={index}>
                    <Link href={`tel:${obj.fullNumber}`} className="phones-header__phone">
                      {obj.shortNumber}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/" className="actions-header__favorite">
            <SvgIcon src={IconsEnum.favourite} style={{ width: '28px', height: '27px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};
