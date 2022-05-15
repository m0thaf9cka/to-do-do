import { useQuery } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useTodoList = (query: string, page: number) => {
  return useQuery('todoList', () => TodoService.getList(query, page), {
    select: (response) => response.data
  });
};
