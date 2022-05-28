import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../api/Todo.service';
import { Todo } from '../global/interfaces';

export const useSaveTodo = () => {
  const client = useQueryClient();
  return useMutation((todo: Todo) => TodoService.save(todo), {
    onSuccess: () => void client.invalidateQueries('todoList')
  });
};
