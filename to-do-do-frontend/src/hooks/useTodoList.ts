import { useQuery } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useTodoList = (query: string) => {
  return useQuery('todoList', () => TodoService.getList(query), {
    select: (response) => response.data
  });
};
