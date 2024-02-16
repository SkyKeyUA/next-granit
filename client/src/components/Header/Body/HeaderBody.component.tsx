import React from 'react';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { Input } from '@components/UI/Input';

import styles from './HeaderBody.module.scss';
import { useResponsive } from '@hooks/useResponsive';
import { DynamicActions } from '@components/UI/Actions/Actions.component';

export const HeaderBodyComponent: React.FC = () => {
  const { Desktop } = useResponsive();
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
        </Link>
        <Input />
        <Desktop>
          <DynamicActions />
        </Desktop>
      </div>
    </div>
  );
};
