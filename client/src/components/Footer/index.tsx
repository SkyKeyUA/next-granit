/** @format */

import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Footer: React.FC = () => {
  const phoneNumber = [
    { fullNumber: '+380675561977', shortNumber: '067-556-19-77' },
    { fullNumber: '+380669099669', shortNumber: '066-909-96-69' },
    { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
  ];
  const categories = [
    {
      id: 0,
      menuCatalog: "Каталог пам'ятників",
      submenuCatalog: [
        "Всі Пам'ятники",
        "Пам'ятники одинарні",
        "Подвійні пам'ятники",
        'Меморіальні комплекси',
        "Ексклюзивні пам'ятники",
        "Пам'ятники з хрестом",
      ],
    },
    {
      id: 1,
      menuCatalog: 'Колір граніту',
      submenuCatalog: [
        "Пам'ятники одинарні",
        "Подвійні пам'ятники",
        'Меморіальні комплекси',
        "Ексклюзивні пам'ятники",
        "Дитячі пам'ятники",
        "Пам'ятники тваринам",
        "Пам'ятники з хрестом",
      ],
    },
    {
      id: 2,
      menuCatalog: 'Наші вироби',
      submenuCatalog: [
        "Пам'ятники одинарні",
        "Подвійні пам'ятники",
        'Меморіальні комплекси',
        "Ексклюзивні пам'ятники",
        "Дитячі пам'ятники",
        "Пам'ятники тваринам",
        "Пам'ятники з хрестом",
      ],
    },
    {
      id: 3,
      menuCatalog: 'Аксесуари',
      submenuCatalog: [
        "Пам'ятники одинарні",
        "Подвійні пам'ятники",
        'Меморіальні комплекси',
        "Ексклюзивні пам'ятники",
        "Дитячі пам'ятники",
        "Пам'ятники тваринам",
        "Пам'ятники з хрестом",
      ],
    },
    {
      id: 4,
      menuCatalog: 'Інформація та Послуги',
      submenuCatalog: [
        'Про нас',
        'Акції',
        'Оплата та доставка',
        'Художні роботи',
        "Установка пам'ятників",
        'Установка комплекса',
        'Монтажні роботи',
      ],
    },
  ];
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
                  style={{ height: '25px', width: '17', marginRight: '15px' }}
                />
                <span>м. Бориспіль, вул. Січнева 40Б</span>
              </Link>
            </div>
            <ul className={styles.phones}>
              {phoneNumber.map((obj, index) => (
                <li className={styles.phone} key={index}>
                  <Link href={`tel:${obj.fullNumber}`}>
                    <SvgIcon src={IconsEnum.phone} size={25} style={{ marginRight: '15px' }} />
                    <span>{obj.shortNumber}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.inner}>
            <div className={styles.info}>
              {categories.map((obj) => (
                <div key={obj.id} className={styles.list}>
                  <div className={styles.label}>{obj.menuCatalog}</div>
                  <ul className={styles.items}>
                    {obj.submenuCatalog.map((subMenu, i) => (
                      <li className={styles.item} key={i}>
                        {subMenu}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
