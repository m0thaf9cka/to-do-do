export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface TodoItemProps {
  item: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

export interface TodoListProps {
  list: Todo[];
  toggle: (id: number) => void;
  remove: (id: number) => void;
}
