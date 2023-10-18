/** @format */

import React from 'react';

import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Card: React.FC = () => {
  return (
    <div className={styles.root}>
      <Link className={styles.productLink} href="/">
        <SvgIcon className={styles.favourite} src={IconsEnum.favourite} />
        <Image
          className={styles.productImg}
          src="/img/memory/1.jpg"
          alt="productImg"
          fill
          priority
          sizes="30vw"
        />
      </Link>
    </div>
  );
};
