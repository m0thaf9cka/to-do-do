import React from 'react';
import { Radio, Stack, Typography } from '@mui/material';

interface TodoFilterItemProps {
  selectedValue: string;
  setSelectedValue: (filter: string) => void;
  value: string;
  label: string;
}

const TodoFilterItem = ({
  selectedValue,
  setSelectedValue,
  value,
  label
}: TodoFilterItemProps) => {
  const isSelected = selectedValue === value;
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedValue(event.target.value);
  return (
    <Stack className={'todoFilterItem'}>
      <Radio
        edge={'start'}
        checked={isSelected}
        onChange={handleSelect}
        value={value}
      />
      <Typography variant={'body1'}>{label}</Typography>
    </Stack>
  );
};

export default TodoFilterItem;
