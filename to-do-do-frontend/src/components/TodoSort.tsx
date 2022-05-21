import React from 'react';
import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';

interface TodoSortProps {
  sort: string;
  setSort: (sort: string) => void;
}

const TodoSort = ({ sort, setSort }: TodoSortProps) => {
  const handleSelect = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  return (
    <Stack className={'sortContainer'}>
      <Select variant={'standard'} value={sort} onChange={handleSelect}>
        <MenuItem value={'id-desc'}>Newest to Oldest</MenuItem>
        <MenuItem value={'id-asc'}>Oldest to Newest</MenuItem>
        <MenuItem value={'title-asc'}>A to Z</MenuItem>
        <MenuItem value={'title-desc'}>Z to A</MenuItem>
      </Select>
    </Stack>
  );
};

export default TodoSort;
