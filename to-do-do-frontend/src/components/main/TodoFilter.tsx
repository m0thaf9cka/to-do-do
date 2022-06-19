import React from 'react';
import { Stack } from '@mui/material';
import TodoFilterItem from './TodoFilterItem';
import {
  FILTER_ACTIVE_VALUE,
  FILTER_ALL_VALUE,
  FILTER_COMPLETE_VALUE
} from '../../global/constants';
import {
  FILTER_ACTIVE_LABEL,
  FILTER_ALL_LABEL,
  FILTER_COMPLETE_LABEL
} from '../../global/labels';

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
  return (
    <Stack className={'todoFilter'}>
      <TodoFilterItem
        selectedValue={filter}
        setSelectedValue={setFilter}
        value={FILTER_ALL_VALUE}
        label={FILTER_ALL_LABEL}
      />
      <TodoFilterItem
        selectedValue={filter}
        setSelectedValue={setFilter}
        value={FILTER_ACTIVE_VALUE}
        label={FILTER_ACTIVE_LABEL}
      />
      <TodoFilterItem
        selectedValue={filter}
        setSelectedValue={setFilter}
        value={FILTER_COMPLETE_VALUE}
        label={FILTER_COMPLETE_LABEL}
      />
    </Stack>
  );
};

export default TodoFilter;
