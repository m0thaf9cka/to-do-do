import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import TodoList from './TodoList';
import TodoSort from './TodoSort';
import TodoFilter from './TodoFilter';
import Footer from './Footer';
import { FILTER_ALL, SORT_ID_DESC } from '../global/constants';
import { useTodoList } from '../hooks/useTodoList';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';
import { useClearTodoList } from '../hooks/useClearTodoList';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(FILTER_ALL);
  const [sort, setSort] = useState(SORT_ID_DESC);
  const [page, setPage] = useState(1);
  const todoListQuery = useTodoList(query, filter, sort, page, setPage);
  const todoListPages = todoListQuery?.data?.data.totalPages;
  const todoSaveMutation = useSaveTodo();
  const todoToggleMutation = useToggleTodo();
  const todoRemoveMutation = useRemoveTodo();
  const todoClearMutation = useClearTodoList();
  const isTodoListLoading =
    todoListQuery.isFetching ||
    todoSaveMutation.isLoading ||
    todoRemoveMutation.isLoading ||
    todoClearMutation.isLoading;
  useEffect(() => void todoListQuery.refetch(), [query, filter, sort, page]);
  return (
    <Box className={'appContainer'}>
      <Header
        query={query}
        setQuery={setQuery}
        saveTodo={todoSaveMutation.mutate}
        clearTodoList={todoClearMutation.mutate}
      />
      <TodoSort sort={sort} setSort={setSort} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        listQuery={todoListQuery}
        isLoading={isTodoListLoading}
        saveItem={todoSaveMutation.mutate}
        toggleItem={todoToggleMutation.mutate}
        removeItem={todoRemoveMutation.mutate}
      />
      <Footer page={page} setPage={setPage} totalPages={todoListPages} />
    </Box>
  );
};

export default TodoApp;
