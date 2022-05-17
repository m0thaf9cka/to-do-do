import React from 'react';
import { Box, CircularProgress, List, Stack, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../global/interfaces';

interface TodoListProps {
  list: Todo[];
  isLoading: boolean;
  isSuccess: boolean;
  isEmpty: boolean;
  saveItem: (todo: Todo) => void;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

const TodoList = ({
  list,
  isLoading,
  isSuccess,
  isEmpty,
  saveItem,
  toggleItem,
  removeItem
}: TodoListProps) => {
  return (
    <Box className={'todoListContainer'}>
      {isSuccess && !isEmpty && !isLoading && (
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
    </Box>
  );
};

export default TodoList;
