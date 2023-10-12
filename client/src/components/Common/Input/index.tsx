/** @format */
import React from 'react';
import debounce from 'lodash.debounce';
import { setSearchValue } from '@redux/reducers/filter/reducer';
import { useAppDispatch } from '@hooks/redux';

import styles from './Input.module.scss';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Input = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 350),
    [],
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <SvgIcon
          src={IconsEnum.search}
          className={`${styles.icon} ${styles.icon_search}`}
          style={{ width: '20px', height: '20px' }}
        />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Search..."
          type="text"
        />
        {value && (
          <SvgIcon
            src={IconsEnum.btnremove}
            className={`${styles.icon} ${styles.icon_remove}`}
            style={{ width: '32px', height: '32px' }}
            onClick={onClickClear}
          />
        )}
      </div>
    </div>
  );
};
