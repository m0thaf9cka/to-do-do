import React from 'react';
import { AxiosResponse } from 'axios';
import { UseQueryResult } from 'react-query';
import { Box, CircularProgress, List, Stack, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../global/interfaces';

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
    <Box className={'todoListContainer'}>
      {listQuery.isSuccess && !isEmpty && !isLoading && (
        <List>
          {list?.content.map((item: Todo) => (
            <TodoItem
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
        <Stack
          className={'todoListContainer'}
          style={{ justifyContent: 'center' }}>
          <Stack style={{ alignItems: 'center' }}>
            <Typography variant={'h6'}>No items found</Typography>
          </Stack>
        </Stack>
      )}
      {isLoading && (
        <Stack
          className={'todoListContainer'}
          style={{ justifyContent: 'center' }}>
          <Stack style={{ alignItems: 'center' }}>
            <Box style={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </Stack>
        </Stack>
      )}
      {listQuery.isError && (
        <Stack
          className={'todoListContainer'}
          style={{ justifyContent: 'center' }}>
          <Stack style={{ alignItems: 'center' }}>
            <Box style={{ display: 'flex' }}>
              <Typography variant={'h6'}>Something went wrong</Typography>
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default TodoList;
