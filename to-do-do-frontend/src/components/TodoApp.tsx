import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoSort from './TodoSort';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
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
  const {
    data: response,
    isFetching,
    isSuccess,
    refetch
  } = useTodoList(query, filter, sort, page, setPage);
  const todoList = response?.data;
  const { mutate: saveTodo, isLoading: isSaving } = useSaveTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { mutate: removeTodo, isLoading: isRemoving } = useRemoveTodo();
  const { mutate: clearTodoList, isLoading: isClearing } = useClearTodoList();
  useEffect(() => void refetch(), [query, filter, sort, page]);
  return (
    <Box className={'appContainer'}>
      <TodoHeader
        query={query}
        setQuery={setQuery}
        saveTodo={saveTodo}
        clearTodoList={clearTodoList}
      />
      <TodoSort sort={sort} setSort={setSort} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        list={todoList?.content}
        isLoading={isFetching || isSaving || isRemoving || isClearing}
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
