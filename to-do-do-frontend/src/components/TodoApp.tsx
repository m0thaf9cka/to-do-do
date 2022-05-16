import React, { useEffect, useState } from 'react';
import { Box, Stack, Pagination } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { useTodoList } from '../hooks/useTodoList';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const {
    data: response,
    isSuccess,
    refetch
  } = useTodoList(query, page, setPage);
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
      {isSuccess && (
        <TodoList
          list={response?.data?.content}
          saveItem={saveTodo}
          toggleItem={toggleTodo}
          removeItem={removeTodo}
        />
      )}
      <Stack style={{ alignItems: 'center' }}>
        <Pagination
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, page: number) =>
            setPage(page)
          }
          count={response?.data?.totalPages}
          color={'primary'}
        />
      </Stack>
    </Box>
  );
};

export default TodoApp;
