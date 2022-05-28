import React from 'react';
import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import {
  SORT_ID_ASC,
  SORT_ID_DESC,
  SORT_TITLE_ASC,
  SORT_TITLE_DESC
} from '../global/constants';

interface TodoSortProps {
  sort: string;
  setSort: (sort: string) => void;
}

const TodoSort = ({ sort, setSort }: TodoSortProps) => {
  const handleSelect = (event: SelectChangeEvent) =>
    setSort(event.target.value);
  return (
    <Stack className={'sortContainer'}>
      <Select variant={'standard'} value={sort} onChange={handleSelect}>
        <MenuItem value={SORT_ID_DESC}>Newest to Oldest</MenuItem>
        <MenuItem value={SORT_ID_ASC}>Oldest to Newest</MenuItem>
        <MenuItem value={SORT_TITLE_ASC}>A to Z</MenuItem>
        <MenuItem value={SORT_TITLE_DESC}>Z to A</MenuItem>
      </Select>
    </Stack>
  );
};

export default TodoSort;
