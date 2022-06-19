import React from 'react';
import { Pagination, Stack } from '@mui/material';

interface TodoPaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const TodoPagination = ({ page, setPage, totalPages }: TodoPaginationProps) => {
  return (
    <Stack className={'todoPagination'}>
      {totalPages > 1 && (
        <Pagination
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, page: number) =>
            setPage(page)
          }
          count={totalPages}
          color={'primary'}
        />
      )}
    </Stack>
  );
};

export default TodoPagination;
