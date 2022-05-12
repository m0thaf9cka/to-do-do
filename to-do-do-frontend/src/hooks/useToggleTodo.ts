import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useToggleTodo = () => {
  const client = useQueryClient();
  return useMutation((id: number) => TodoService.toggle(id), {
    onSuccess: () => {
      void client.invalidateQueries('todoList');
    }
  });
};
