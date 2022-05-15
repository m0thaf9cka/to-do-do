import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo, TodoListProps } from '../global/interfaces';

const TodoList = ({
  list,
  saveItem,
  toggleItem,
  removeItem
}: TodoListProps) => {
  return (
    <List>
      {list.map((item: Todo) => (
        <TodoItem
          key={item.id}
          item={item}
          save={saveItem}
          toggle={toggleItem}
          remove={removeItem}
        />
      ))}
    </List>
  );
};

export default TodoList;
