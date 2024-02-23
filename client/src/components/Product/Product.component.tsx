import React from 'react';

import styles from './Product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Product } from '@customTypes/index';
import { baseURL } from '@api/index';
import { Highlight } from '@components/UI/Highlight';

export const ProductComponent: React.FC<Product> = ({ title, image }) => {
  const imageUrl = `${baseURL}${image}`;
  const light = (str: string) => {
    return <Highlight str={str} />;
  };

  return (
    <div className={styles.root}>
      <SvgIcon className={styles.like} src={IconsEnum.like} />
      <Link className={styles.link} href="/">
        <Image className={styles.img} src={imageUrl} alt="productImg" fill priority sizes="30vw" />
      </Link>
      <div className={styles.body}>
        <div className={styles.title}>
          <Link href="/">{light(title)}</Link>
        </div>
        <div className={styles.price}>
          Ціна: <span>Уточнюйте</span>
        </div>
      </div>
    </div>
  );
};
