import React, { useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Modal from '../common/TodoModal';
import TodoSearch from './TodoSearch';
import { Todo } from '../../global/interfaces';

interface TodoHeaderProps {
  query: string;
  setQuery: (query: string) => void;
  saveTodo: (todo: Todo) => void;
  clearTodoList: () => void;
}

const TodoHeader = ({
  query,
  setQuery,
  saveTodo,
  clearTodoList
}: TodoHeaderProps) => {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <Stack className={'todoHeader'}>
      <TodoSearch query={query} setQuery={setQuery} />
      <Stack className={'todoHeaderButtons'}>
        <IconButton
          edge={'end'}
          color={'primary'}
          onClick={() => clearTodoList()}>
          <ClearAllIcon fontSize={'large'} color={'primary'} />
        </IconButton>
        <IconButton
          className={'addTodoButton'}
          edge={'end'}
          color={'primary'}
          onClick={() => openModal()}>
          <AddCircleIcon fontSize={'large'} color={'primary'} />
        </IconButton>
      </Stack>
      <Modal isOpen={isModal} close={closeModal} saveItem={saveTodo} />
    </Stack>
  );
};

export default TodoHeader;
