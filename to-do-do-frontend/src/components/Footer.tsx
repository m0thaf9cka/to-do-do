import React from 'react';
import { Pagination, Stack } from '@mui/material';

interface FooterProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Footer = ({ page, setPage, totalPages }: FooterProps) => {
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

export default Footer;
