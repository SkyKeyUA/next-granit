import React from 'react';

import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { baseURL } from '@api/index';
import { Highlight } from '@components/UI/Highlight';
import { Product } from '@customTypes/index';

export const CardComponent: React.FC<Product> = ({ title, image, id }) => {
  const imageUrl = `${baseURL}${image}`;
  const light = (str: string) => {
    return <Highlight str={str} />;
  };

  return (
    <div className={styles.root}>
      <SvgIcon className={styles.like} src={IconsEnum.like} />
      <Link className={styles.link} href={`products/${id}`}>
        <Image className={styles.img} src={imageUrl} alt="productImg" fill priority sizes="30vw" />
      </Link>
      <div className={styles.body}>
        <div className={styles.title}>
          <Link href={`products/${id}`}>{light(title)}</Link>
        </div>
        <div className={styles.price}>
          Ціна: <span>Уточнюйте</span>
        </div>
      </div>
    </div>
  );
};
