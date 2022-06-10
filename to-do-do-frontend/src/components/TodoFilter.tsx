import React from 'react';
import { Radio, Stack, Typography } from '@mui/material';
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE
} from '../global/constants';

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
      style={{
        alignItems: 'center',
        paddingTop: '8px',
        maxWidth: '265px',
        justifyContent: 'space-between'
      }}>
      <Stack direction={'row'} style={{ alignItems: 'center' }}>
        <Radio
          edge={'start'}
          checked={filter === FILTER_ALL}
          onChange={handleSelect}
          value={FILTER_ALL}
        />
        <Typography variant={'body1'} style={{ marginRight: '5px' }}>
          All
        </Typography>
      </Stack>
      <Stack direction={'row'} style={{ alignItems: 'center' }}>
        <Radio
          checked={filter === FILTER_ACTIVE}
          onChange={handleSelect}
          value={FILTER_ACTIVE}
        />
        <Typography variant={'body1'} style={{ marginRight: '5px' }}>
          Active
        </Typography>
      </Stack>
      <Stack direction={'row'} style={{ alignItems: 'center' }}>
        <Radio
          checked={filter === FILTER_COMPLETE}
          onChange={handleSelect}
          value={FILTER_COMPLETE}
        />
        <Typography variant={'body1'}>Complete</Typography>
      </Stack>
    </Stack>
  );
};

export default TodoFilter;
