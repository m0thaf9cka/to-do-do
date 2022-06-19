import React from 'react';
import { AxiosResponse } from 'axios';
import { UseQueryResult } from 'react-query';
import { Box, CircularProgress, List, Stack, Typography } from '@mui/material';
import TodoListItem from './TodoListItem';
import { Todo } from '../../global/interfaces';
import { EMPTY_LIST_LABEL, ERROR_LIST_LABEL } from '../../global/labels';

interface TodoListProps {
  listQuery: UseQueryResult<AxiosResponse>;
  isLoading: boolean;
  saveItem: (todo: Todo) => void;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

const TodoList = ({
  listQuery,
  isLoading,
  saveItem,
  toggleItem,
  removeItem
}: TodoListProps) => {
  const list = listQuery?.data?.data;
  const isEmpty = list?.totalElements === 0;
  return (
    <Box className={'todoList'}>
      {listQuery.isSuccess && !isEmpty && !isLoading && (
        <List>
          {list?.content.map((item: Todo) => (
            <TodoListItem
              key={item.id}
              item={item}
              save={saveItem}
              toggle={toggleItem}
              remove={removeItem}
            />
          ))}
        </List>
      )}
      {isEmpty && !isLoading && (
        <Stack className={'todoList'}>
          <Stack className={'todoListStack'}>
            <Typography variant={'h6'}>{EMPTY_LIST_LABEL}</Typography>
          </Stack>
        </Stack>
      )}
      {isLoading && (
        <Stack className={'todoList'}>
          <Stack className={'todoListStack'}>
            <Box className={'todoListBox'}>
              <CircularProgress />
            </Box>
          </Stack>
        </Stack>
      )}
      {listQuery.isError && (
        <Stack className={'todoList'}>
          <Stack className={'todoListStack'}>
            <Box className={'todoListBox'}>
              <Typography variant={'h6'}>{ERROR_LIST_LABEL}</Typography>
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default TodoList;
