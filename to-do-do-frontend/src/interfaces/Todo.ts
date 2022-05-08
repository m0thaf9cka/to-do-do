export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface TodoItemProps {
  todo: Todo;
}
