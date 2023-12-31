import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { categories, phoneNumbers } from './Footer.constants';
import { PhoneNumbers } from '@components/UI/PhoneNumbers';
import { DynamicAccordion } from '@components/Common/Accordion';
import { useResponsive } from '@hooks/useResponsive';
import { DynamiFooterCategories } from './Categories';

export const Footer: React.FC = () => {
  const [active, setActive] = React.useState([false, false, false, false, false]);
  const { CustomResponsive, ToCustomResponsive } = useResponsive();
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <SvgIcon src={IconsEnum.logo} style={{ width: '275px', height: '27px' }} />
            </Link>
            <div className={styles.title}>
              <Link href="/">
                <SvgIcon
                  src={IconsEnum.location}
                  style={{ height: '25px', width: '17', marginRight: '23px' }}
                />
                <span>м. Бориспіль, вул. Січнева 40Б</span>
              </Link>
            </div>
            <PhoneNumbers phoneNumbers={phoneNumbers} icon={IconsEnum.phone} />
          </div>
          <ToCustomResponsive>
            {categories.map((obj) => (
              <DynamiFooterCategories
                key={obj.id}
                title={obj.menuCatalog}
                subtitle={obj.submenuCatalog}
              />
            ))}
          </ToCustomResponsive>
          <CustomResponsive>
            {categories.map((obj) => (
              <DynamicAccordion
                key={obj.id}
                idx={obj.id}
                turn={active}
                setTurn={setActive}
                title={obj.menuCatalog}
                subtitle={obj.submenuCatalog}
              />
            ))}
          </CustomResponsive>
        </div>
      </div>
    </footer>
  );
};
