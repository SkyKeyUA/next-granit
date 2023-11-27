import React from 'react';

import styles from './BackButton.module.scss';
import dynamic from 'next/dynamic';
import { Button } from '..';
import { IconsEnum } from '@components/UI/SvgIcon';
import { BackButtonProps } from './BackButtonProps.type';

export const DynamicBackButton = dynamic(() =>
  import('@components/UI/Button/BackButton').then((mod) => mod.BackButton),
);

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} icon={IconsEnum.back} text="Назад" className={styles.backButton} />
  );
};
