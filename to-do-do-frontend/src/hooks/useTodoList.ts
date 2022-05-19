import { useQuery } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useTodoList = (
  query: string,
  filter: string,
  page: number,
  setPage: (page: number) => void
) => {
  return useQuery('todoList', () => TodoService.getList(query, filter, page), {
    onSuccess: (response) => {
      if (response?.data?.empty && page > 1) {
        setPage(page - 1);
      }
    }
  });
};
