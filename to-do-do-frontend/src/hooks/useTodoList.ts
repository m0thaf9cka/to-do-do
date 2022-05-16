import { useQuery } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useTodoList = (
  query: string,
  page: number,
  setPage: (page: number) => void
) => {
  return useQuery('todoList', () => TodoService.getList(query, page), {
    onSuccess: (response) => {
      if (response?.data?.empty && page > 1) {
        setPage(page - 1);
      }
    }
  });
};
