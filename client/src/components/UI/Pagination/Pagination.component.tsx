import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.types';

export const PaginationComponent: React.FC<PaginationProps> = ({
  count,
  currentPage,
  onChangePage,
}) => {
  const totalPages = Math.ceil(count / 9);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};
