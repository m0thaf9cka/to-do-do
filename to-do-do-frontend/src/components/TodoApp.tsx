import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { useTodoList } from '../hooks/useTodoList';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const { data, isSuccess, refetch } = useTodoList(query);
  const { mutate: saveTodo } = useSaveTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { mutate: removeTodo } = useRemoveTodo();
  useEffect(() => void refetch(), [query]);
  return (
    <Box className={'appContainer'}>
      <TodoHeader query={query} setQuery={setQuery} saveTodo={saveTodo} />
      {isSuccess && (
        <TodoList
          list={data}
          saveItem={saveTodo}
          toggleItem={toggleTodo}
          removeItem={removeTodo}
        />
      )}
    </Box>
  );
};

export default TodoApp;
