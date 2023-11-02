/** @format */

import Link from 'next/link';
import React from 'react';

import styles from './Catalog.module.scss';

type CatalogProps = {
  categoryId: number;
  onClickCatalog: (i: number) => void;
};

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
    menuCatalog: 'Послуги',
    submenuCatalog: [
      'Художні роботи',
      "Установка пам'ятників",
      'Установка комплекса',
      'Монтажні роботи',
    ],
  },
];
export const Catalog: React.FC<CatalogProps> = ({ categoryId, onClickCatalog }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            {categories.map(({ id, menuCatalog }) => (
              <li
                onClick={() => onClickCatalog(id)}
                key={id}
                className={`${styles.item} ${categoryId === id ? `${styles.item_open}` : ''}`}>
                {menuCatalog}
              </li>
            ))}
          </ul>
          {categories[categoryId].submenuCatalog && (
            <ul className={styles.sub_list}>
              {categories[categoryId].submenuCatalog?.map((obj, index) => (
                <li key={index} className={styles.sub_item}>
                  {obj}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};
