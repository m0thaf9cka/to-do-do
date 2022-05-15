import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../global/interfaces';

interface TodoListProps {
  list: Todo[];
  saveItem: (todo: Todo) => void;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

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
