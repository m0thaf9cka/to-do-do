import React, { useState } from 'react';
import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import { Todo } from '../../global/interfaces';
import {
  ADD_TODO_LABEL,
  CANCEL_LABEL,
  EDIT_TODO_LABEL,
  SAVE_LABEL
} from '../../global/labels';

interface TodoModalProps {
  isOpen: boolean;
  close: () => void;
  item?: Todo;
  saveItem: (todo: Todo) => void;
}

const TodoModal = ({ isOpen, close, item, saveItem }: TodoModalProps) => {
  const emptyTodo = { id: 0, title: '', isComplete: false };
  const [todo, setTodo] = useState(item || emptyTodo);
  const submit = () => {
    if (todo.title.trim()) {
      close();
      saveItem({ ...todo, title: todo.title.trim() });
      setTodo(item ? todo : emptyTodo);
    }
  };
  const cancel = () => {
    close();
    setTodo(item || emptyTodo);
  };
  return (
    <Modal open={isOpen} onClose={() => cancel()}>
      <Box className={'todoModal'}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            className={'todoInput'}
            label={item ? EDIT_TODO_LABEL : ADD_TODO_LABEL}
            variant={'standard'}
            value={todo.title}
            onChange={(event) =>
              setTodo({ ...todo, title: event.target.value })
            }
          />
          <Stack
            direction={'row'}
            spacing={1}
            style={{ justifyContent: 'end' }}>
            <Button variant={'outlined'} onClick={() => cancel()}>
              {CANCEL_LABEL}
            </Button>
            <Button
              className={'saveTodoButton'}
              variant={'contained'}
              onClick={() => submit()}
              disabled={!todo.title.trim()}>
              {SAVE_LABEL}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TodoModal;
