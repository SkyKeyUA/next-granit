import React from 'react';

import styles from './PhoneNumbers.module.scss';
import { PhoneNumbersProps } from './PhoneNumbers.types';
import { SvgIcon } from '@components/UI/SvgIcon';
import Link from 'next/link';

export const PhoneNumbers: React.FC<PhoneNumbersProps> = ({ phoneNumbers, icon, ...props }) => {
  return phoneNumbers ? (
    <ul className={styles.phones}>
      {phoneNumbers.map((obj: any, index: any) => (
        <li className={styles.phone} key={index}>
          <Link href={`tel:${obj.fullNumber}`}>
            {icon && <SvgIcon src={icon} size={25} style={{ marginRight: '15px' }} />}
            {obj.shortNumber}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
};
