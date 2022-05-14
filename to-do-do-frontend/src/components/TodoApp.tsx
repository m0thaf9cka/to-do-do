import React, { useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TodoList from './TodoList';
import TodoModal from './TodoModal';
import { useTodoList } from '../hooks/useTodoList';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';

const TodoApp = () => {
  const { data, isSuccess } = useTodoList();
  const { mutate: toggle } = useToggleTodo();
  const { mutate: remove } = useRemoveTodo();
  const [isModal, setIsModal] = useState(false);
  return (
    <Box className={'appContainer'}>
      <Stack direction={'row'}>
        <IconButton
          onClick={() => setIsModal(true)}
          edge={'start'}
          color={'primary'}>
          <AddCircleIcon fontSize={'large'} color={'primary'} />
        </IconButton>
      </Stack>
      <TodoModal isOpen={isModal} setIsOpen={setIsModal} />
      {isSuccess && <TodoList list={data} toggle={toggle} remove={remove} />}
    </Box>
  );
};

export default TodoApp;
