import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TodoHeader from './header/TodoHeader';
import TodoSort from './main/TodoSort';
import TodoFilter from './main/TodoFilter';
import TodoList from './main/TodoList';
import TodoFooter from './footer/TodoFooter';
import { FILTER_ALL_VALUE, SORT_CREATED_AT_DESC } from '../global/constants';
import { useGetTodoList } from '../hooks/useGetTodoList';
import { useSaveTodo } from '../hooks/useSaveTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';
import { useClearTodoList } from '../hooks/useClearTodoList';

const TodoApp = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(FILTER_ALL_VALUE);
  const [sort, setSort] = useState(SORT_CREATED_AT_DESC);
  const [page, setPage] = useState(1);
  const todoListQuery = useGetTodoList(query, filter, sort, page, setPage);
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
    <Box className={'todoApp'}>
      <TodoHeader
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
      <TodoFooter page={page} setPage={setPage} totalPages={todoListPages} />
    </Box>
  );
};

export default TodoApp;
