import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoList from './TodoList';
import TodoModal from './TodoModal';
import { useRemoveTodo } from '../hooks/useRemoveTodo';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useTodoList } from '../hooks/useTodoList';
import { useToggleTodo } from '../hooks/useToggleTodo';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const { data, isSuccess, refetch } = useTodoList(query);
  const { mutate: saveTodo } = useSaveTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { mutate: removeTodo } = useRemoveTodo();
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  useEffect(() => void refetch(), [query]);
  return (
    <Box className={'appContainer'}>
      <Stack direction={'row'}>
        <TextField
          fullWidth
          label={'Search'}
          variant={'standard'}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <IconButton onClick={() => openModal()} edge={'end'} color={'primary'}>
          <AddCircleIcon fontSize={'large'} color={'primary'} />
        </IconButton>
      </Stack>
      <TodoModal isOpen={isModal} close={closeModal} saveItem={saveTodo} />
      {isSuccess && (
        <TodoList
          list={data}
          saveItem={saveTodo}
          toggleItem={toggleTodo}
          removeItem={removeTodo}
        />
      )}
    </Box>
  );
};

export default TodoApp;
