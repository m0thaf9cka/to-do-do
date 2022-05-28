import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useRemoveTodo = () => {
  const client = useQueryClient();
  return useMutation((id: number) => TodoService.remove(id), {
    onSuccess: () => void client.invalidateQueries('todoList')
  });
};
