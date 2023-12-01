import React from 'react';
import { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.scss';
import dynamic from 'next/dynamic';

export const DynamicAccordion = dynamic(() =>
  import('@components/Common/Accordion').then((mod) => mod.Accordion),
);

export const Accordion: React.FC<AccordionProps> = ({ title, subtitle, turn, setTurn, idx }) => {
  const contentRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn![idx]
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [contentRef, turn, idx]);

  const toggleAccordion = () => {
    let newTurn = [...turn!];
    newTurn[idx] = !newTurn[idx];
    setTurn!(newTurn);
  };

  return (
    <div className={styles.list}>
      <div
        onClick={toggleAccordion}
        className={`${styles.label} ${turn[idx] ? styles.label_open : ''}`}>
        {title}
      </div>
      <ul ref={contentRef} className={`${styles.items} ${turn[idx] ? styles.items_open : ''}`}>
        {subtitle.map((subMenu, i) => (
          <li className={styles.item} key={i}>
            {subMenu}
          </li>
        ))}
      </ul>
    </div>
  );
};
