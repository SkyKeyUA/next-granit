import React from 'react';
import { HighlightProps } from './Highlight.types';
import { useFilterSelector } from '@redux/reducers/filter/filter.selectors';

export const HighlightComponent: React.FC<HighlightProps> = ({ str }) => {
  const { searchValue } = useFilterSelector();
  if (!searchValue) return <>{str}</>;
  const regexp = new RegExp(searchValue, 'ig');
  const matchValue = str.match(regexp);
  if (matchValue) {
    return (
      <>
        {str.split(regexp).map((s, index, array) => {
          if (index < array.length - 1) {
            const c = matchValue.shift();
            return (
              <span key={index}>
                {s}
                <mark>{c}</mark>
              </span>
            );
          }
          return <React.Fragment key={index}>{s}</React.Fragment>;
        })}
      </>
    );
  }
  return <>{str}</>;
};
