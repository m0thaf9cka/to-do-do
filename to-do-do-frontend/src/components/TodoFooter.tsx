import React from 'react';
import { Pagination, Stack } from '@mui/material';

const TodoFooter = ({ page, setPage, totalPages }: any) => {
  return (
    <Stack style={{ alignItems: 'center' }}>
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

export default TodoFooter;
