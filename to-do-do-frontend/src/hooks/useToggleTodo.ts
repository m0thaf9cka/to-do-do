import { useMutation } from 'react-query';
import { TodoService } from '../api/Todo.service';

export const useToggleTodo = () =>
  useMutation((id: number) => TodoService.toggle(id));
