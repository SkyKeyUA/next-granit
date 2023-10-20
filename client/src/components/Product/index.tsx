/** @format */

import React from 'react';

import styles from './Product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Product: React.FC = () => {
  return (
    <div className={styles.root}>
      <SvgIcon className={styles.like} src={IconsEnum.like} />
      <Link className={styles.link} href="/">
        <Image
          className={styles.img}
          src="/img/memory/1.jpg"
          alt="productImg"
          fill
          priority
          sizes="30vw"
        />
      </Link>
      <div className={styles.title}>
        <Link href="/">Комплекс одинарного памятника з отмосткою</Link>
      </div>
    </div>
  );
};
