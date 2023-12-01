import { Dispatch, SetStateAction } from 'react';

export interface AccordionProps {
  title: string;
  subtitle: string[];
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  idx: number;
}
