import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { useTodoList } from '../hooks/useTodoList';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const {
    data: response,
    isFetching,
    isSuccess,
    refetch
  } = useTodoList(query, page, setPage);
  const isEmpty = response?.data?.empty;
  const { mutate: saveTodo } = useSaveTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { mutate: removeTodo } = useRemoveTodo();
  useEffect(() => void refetch(), [page]);
  useEffect(() => {
    setPage(1);
    void refetch();
  }, [query]);
  return (
    <Box className={'appContainer'}>
      <TodoHeader query={query} setQuery={setQuery} saveTodo={saveTodo} />
      <TodoList
        list={response?.data?.content}
        isFetching={isFetching}
        isSuccess={isSuccess}
        isEmpty={isEmpty}
        saveItem={saveTodo}
        toggleItem={toggleTodo}
        removeItem={removeTodo}
      />
      <TodoFooter
        page={page}
        setPage={setPage}
        totalPages={response?.data?.totalPages}
      />
    </Box>
  );
};

export default TodoApp;
