import React from 'react';
import { Radio, Stack, Typography } from '@mui/material';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from '../global/constants';

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);
  return (
    <Stack
      direction={'row'}
      style={{ alignItems: 'center', paddingTop: '8px' }}>
      <Radio
        edge={'start'}
        checked={filter === FILTER_ALL}
        onChange={handleSelect}
        value={FILTER_ALL}
      />
      <Typography variant={'body1'} style={{ marginRight: '10px' }}>
        All
      </Typography>
      <Radio
        checked={filter === FILTER_ACTIVE}
        onChange={handleSelect}
        value={FILTER_ACTIVE}
      />
      <Typography variant={'body1'} style={{ marginRight: '10px' }}>
        Active
      </Typography>
      <Radio
        checked={filter === FILTER_DONE}
        onChange={handleSelect}
        value={FILTER_DONE}
      />
      <Typography variant={'body1'}>Done</Typography>
    </Stack>
  );
};

export default TodoFilter;
