export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface TodoItemProps {
  item: Todo;
  save: (todo: Todo) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

export interface TodoListProps {
  list: Todo[];
  saveItem: (todo: Todo) => void;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export interface TodoModalProps {
  isOpen: boolean;
  close: () => void;
  item?: Todo;
  saveItem: (todo: Todo) => void;
}
