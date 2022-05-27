import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import TodoModal from './TodoModal';
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
  return (
    <Stack direction={'row'} style={{ justifyContent: 'space-between' }}>
      <TextField
        label={'Search'}
        variant={'standard'}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        style={{ width: '300px' }}
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
      <TodoModal isOpen={isModal} close={closeModal} saveItem={saveTodo} />
    </Stack>
  );
};

export default Header;
