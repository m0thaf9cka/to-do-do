import React from 'react';
import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import {
  SORT_CREATED_AT_ASC,
  SORT_CREATED_AT_DESC,
  SORT_TITLE_ASC,
  SORT_TITLE_DESC
} from '../../global/constants';
import {
  SORT_CREATED_AT_ASC_LABEL,
  SORT_CREATED_AT_DESC_LABEL,
  SORT_TITLE_ASC_LABEL,
  SORT_TITLE_DESC_LABEL
} from '../../global/labels';

interface TodoSortProps {
  sort: string;
  setSort: (sort: string) => void;
}

const TodoSort = ({ sort, setSort }: TodoSortProps) => {
  const handleSelect = (event: SelectChangeEvent) =>
    setSort(event.target.value);
  return (
    <Stack className={'todoSort'}>
      <Select variant={'standard'} value={sort} onChange={handleSelect}>
        <MenuItem value={SORT_CREATED_AT_DESC}>
          {SORT_CREATED_AT_DESC_LABEL}
        </MenuItem>
        <MenuItem value={SORT_CREATED_AT_ASC}>
          {SORT_CREATED_AT_ASC_LABEL}
        </MenuItem>
        <MenuItem value={SORT_TITLE_ASC}>{SORT_TITLE_ASC_LABEL}</MenuItem>
        <MenuItem value={SORT_TITLE_DESC}>{SORT_TITLE_DESC_LABEL}</MenuItem>
      </Select>
    </Stack>
  );
};

export default TodoSort;
