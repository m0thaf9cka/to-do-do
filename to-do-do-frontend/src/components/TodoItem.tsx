import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { TodoItemProps } from '../global/interfaces';

const TodoItem = ({ item, toggle, remove }: TodoItemProps) => {
  return (
    <ListItem disableGutters disablePadding>
      <Checkbox
        edge={'start'}
        checked={item.isCompleted}
        onChange={() => toggle(item.id)}
      />
      <ListItemText primary={item.title} />
      <IconButton edge={'end'} onClick={() => remove(item.id)}>
        <ClearIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
