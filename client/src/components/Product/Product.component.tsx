import React from 'react';

import styles from './Product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Product } from '@customTypes/index';
import $api from '@api/index';

export const ProductComponent: React.FC<Product> = ({ title, image }) => {
  const imageUrl = `${$api.defaults.baseURL}${image}`;
  return (
    <div className={styles.root}>
      <SvgIcon className={styles.like} src={IconsEnum.like} />
      <Link className={styles.link} href="/">
        <Image
          loader={() => imageUrl}
          className={styles.img}
          src={imageUrl}
          alt="productImg"
          unoptimized
          fill
          priority
          sizes="30vw"
        />
      </Link>
      <div className={styles.body}>
        <div className={styles.title}>
          <Link href="/">{title}</Link>
        </div>
        <div className={styles.price}>
          Ціна: <span>Уточнюйте</span>
        </div>
      </div>
    </div>
  );
};
