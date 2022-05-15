import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoModal from './TodoModal';
import { Todo } from '../global/interfaces';

interface TodoHeader {
  query: string;
  setQuery: (query: string) => void;
  saveTodo: (todo: Todo) => void;
}

const TodoHeader = ({ query, setQuery, saveTodo }: TodoHeader) => {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <Stack direction={'row'}>
      <TextField
        fullWidth
        label={'Search'}
        variant={'standard'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton edge={'end'} color={'primary'} onClick={() => openModal()}>
        <AddCircleIcon fontSize={'large'} color={'primary'} />
      </IconButton>
      <TodoModal isOpen={isModal} close={closeModal} saveItem={saveTodo} />
    </Stack>
  );
};

export default TodoHeader;
