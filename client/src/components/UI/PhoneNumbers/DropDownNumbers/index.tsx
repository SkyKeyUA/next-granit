import React from 'react';
import { DropDownNumbersProps } from './DropDownNumbers.types';

import styles from './DropDownNumbers.module.scss';
import Link from 'next/link';

export const DropDownNumbers: React.FC<DropDownNumbersProps> = ({ phoneNumbers }) => {
  const [openNumber, setOpenNumber] = React.useState(false);
  return phoneNumbers ? (
    <div className={styles.items}>
      <Link
        href={`tel:${phoneNumbers.mainNumber.fullNumber}`}
        className={`${styles.phone} ${styles.mainNumber}`}>
        {phoneNumbers.mainNumber.shortNumber}
      </Link>
      <button
        onClick={() => setOpenNumber(!openNumber)}
        type="button"
        className={`${styles.arrow} ${openNumber ? styles.arrow_open : ''}`}></button>
      <ul className={`${styles.list} ${openNumber ? styles.list_open : ''}`}>
        {phoneNumbers.secondNumbers.map((obj, index) => (
          <li key={index}>
            <Link href={`tel:${obj.fullNumber}`} className={styles.phone}>
              {obj.shortNumber}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
