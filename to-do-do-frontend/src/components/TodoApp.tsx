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
  const todoList = response?.data;
  const { mutate: saveTodo, isLoading: isSaving } = useSaveTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { mutate: removeTodo, isLoading: isRemoving } = useRemoveTodo();
  useEffect(() => void refetch(), [query, page]);
  return (
    <Box className={'appContainer'}>
      <TodoHeader query={query} setQuery={setQuery} saveTodo={saveTodo} />
      <TodoList
        list={todoList?.content}
        isLoading={isFetching || isSaving || isRemoving}
        isSuccess={isSuccess}
        isEmpty={todoList?.totalElements === 0}
        saveItem={saveTodo}
        toggleItem={toggleTodo}
        removeItem={removeTodo}
      />
      <TodoFooter
        page={page}
        setPage={setPage}
        totalPages={todoList?.totalPages}
      />
    </Box>
  );
};

export default TodoApp;
