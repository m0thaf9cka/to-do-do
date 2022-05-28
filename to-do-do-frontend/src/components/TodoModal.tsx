import React, { useState } from 'react';
import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import { Todo } from '../global/interfaces';

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
      <Box className={'modalBox'}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label={item ? 'Edit todo' : 'Add todo'}
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
              Cancel
            </Button>
            <Button
              variant={'contained'}
              onClick={() => submit()}
              disabled={!todo.title.trim()}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TodoModal;
