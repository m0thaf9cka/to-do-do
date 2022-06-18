import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { IconButton, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Modal from './TodoModal';
import { SEARCH_LABEL } from '../global/constants';
import { Todo } from '../global/interfaces';

interface Header {
  query: string;
  setQuery: (query: string) => void;
  saveTodo: (todo: Todo) => void;
  clearTodoList: () => void;
}

const Header = ({ query, setQuery, saveTodo, clearTodoList }: Header) => {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  const changeQuery = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);
  const queryHandler = useMemo(() => debounce(changeQuery, 500), [query]);
  useEffect(() => () => queryHandler.cancel(), []);
  return (
    <Stack direction={'row'} style={{ justifyContent: 'space-between' }}>
      <TextField
        className={'todoSearch'}
        label={SEARCH_LABEL}
        variant={'standard'}
        onChange={queryHandler}
        style={{ width: '265px' }}
      />
      <Stack
        direction={'row'}
        style={{ width: '80px', justifyContent: 'space-between' }}>
        <IconButton
          edge={'end'}
          color={'primary'}
          onClick={() => clearTodoList()}>
          <ClearAllIcon fontSize={'large'} color={'primary'} />
        </IconButton>
        <IconButton edge={'end'} color={'primary'} onClick={() => openModal()}>
          <AddCircleIcon fontSize={'large'} color={'primary'} />
        </IconButton>
      </Stack>
      <Modal isOpen={isModal} close={closeModal} saveItem={saveTodo} />
    </Stack>
  );
};

export default Header;
