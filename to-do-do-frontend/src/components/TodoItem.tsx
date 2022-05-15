import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import TodoModal from './TodoModal';
import { TodoItemProps } from '../global/interfaces';

const TodoItem = ({ item, save, toggle, remove }: TodoItemProps) => {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <ListItem disableGutters disablePadding>
      <Checkbox
        edge={'start'}
        checked={item.isCompleted}
        onChange={() => toggle(item.id)}
      />
      <ListItemText primary={item.title} style={{ margin: '0 10px' }} />
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
