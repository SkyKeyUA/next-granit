import React from 'react';

import styles from './Loader.module.scss';
import { LoaderProps } from './Loader.types';

export const LoaderComponent: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div style={{ margin: '20px 0px' }} className={styles.root}>
          <div className={styles.body}>
            {[...Array(20)].map((_, i) => (
              <span key={i} style={{ '--i': i + 1 } as React.CSSProperties}></span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
