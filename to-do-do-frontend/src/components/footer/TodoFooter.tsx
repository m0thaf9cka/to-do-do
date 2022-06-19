import React from 'react';
import { Stack } from '@mui/material';
import TodoPagination from './TodoPagination';

interface TodoFooterProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const TodoFooter = ({ page, setPage, totalPages }: TodoFooterProps) => {
  return (
    <Stack>
      <TodoPagination page={page} setPage={setPage} totalPages={totalPages} />
    </Stack>
  );
};

export default TodoFooter;
