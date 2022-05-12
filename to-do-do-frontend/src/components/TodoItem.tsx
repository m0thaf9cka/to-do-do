import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
import { TodoItemProps } from '../global/interfaces';

const TodoItem = ({ item, toggle }: TodoItemProps) => {
  return (
    <ListItem>
      <Checkbox checked={item.isCompleted} onChange={() => toggle(item.id)} />
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default TodoItem;
