import React, { ChangeEvent, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { TextField } from '@mui/material';
import { SEARCH_LABEL } from '../../global/labels';

interface TodoSearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const TodoSearch = ({ query, setQuery }: TodoSearchProps) => {
  const changeQuery = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);
  const queryHandler = useMemo(() => debounce(changeQuery, 500), [query]);
  useEffect(() => () => queryHandler.cancel(), []);
  return (
    <TextField
      className={'todoSearch'}
      label={SEARCH_LABEL}
      variant={'standard'}
      onChange={queryHandler}
    />
  );
};

export default TodoSearch;
