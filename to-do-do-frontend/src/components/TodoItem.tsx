import React, { useState } from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import TodoModal from './TodoModal';
import { Todo } from '../global/interfaces';

interface TodoItemProps {
  item: Todo;
  save: (todo: Todo) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

const TodoItem = ({ item, save, toggle, remove }: TodoItemProps) => {
  const [isComplete, setIsComplete] = useState(item.isComplete);
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <ListItem disableGutters disablePadding>
      <Checkbox
        edge={'start'}
        checked={isComplete}
        onChange={() => {
          setIsComplete(!isComplete);
          toggle(item.id);
        }}
      />
      <ListItemText className={'todoItemTitle'} primary={item.title} />
      <IconButton onClick={() => openModal()}>
        <EditIcon />
      </IconButton>
      <IconButton edge={'end'} onClick={() => remove(item.id)}>
        <ClearIcon />
      </IconButton>
      <TodoModal
        isOpen={isModal}
        close={closeModal}
        item={item}
        saveItem={save}
      />
    </ListItem>
  );
};

export default TodoItem;
