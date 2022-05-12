import { useQuery } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useTodoList = () => {
  return useQuery('todoList', () => TodoService.getAll(), {
    select: (response) => response.data
  });
};
