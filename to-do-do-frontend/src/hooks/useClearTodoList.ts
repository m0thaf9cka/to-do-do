import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useClearTodoList = () => {
  const client = useQueryClient();
  return useMutation(() => TodoService.clearList(), {
    onSuccess: () => {
      void client.invalidateQueries('todoList');
    }
  });
};
