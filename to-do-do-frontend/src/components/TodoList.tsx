import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo, TodoListProps } from '../global/interfaces';

const TodoList = ({ list, toggle, remove }: TodoListProps) => {
  return (
    <List>
      {list.map((item: Todo) => (
        <TodoItem key={item.id} item={item} toggle={toggle} remove={remove} />
      ))}
    </List>
  );
};

export default TodoList;
