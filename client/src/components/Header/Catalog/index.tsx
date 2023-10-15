/** @format */

import Link from 'next/link';
import React from 'react';

import styles from './Catalog.module.scss';

type CatalogProps = {
  categoryId: number;
  onClickCatalog: (i: number) => void;
};
export const Catalog: React.FC<CatalogProps> = ({ categoryId, onClickCatalog }) => {
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
      menuCatalog: 'Художні роботи',
    },
  ];
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <div className={styles.list}>
            {categories.map(({ id, menuCatalog }) => (
              <div onClick={() => onClickCatalog(id)} key={id} className={styles.items}>
                <div className={styles.item}>
                  <div
                    className={`${styles.link} ${categoryId === id ? `${styles.link_open}` : ''}`}>
                    {menuCatalog}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {categories[categoryId].submenuCatalog && (
            <div className={styles.row}>
              <ul className={styles.sub_list}>
                {categories[categoryId].submenuCatalog?.map((obj, index) => (
                  <li key={index} className={styles.sub_item}>
                    <Link href="/" className={styles.sub_link}>
                      {obj}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};
