import React from 'react';
import TodoList from './TodoList';
import { useTodoList } from '../hooks/useTodoList';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useRemoveTodo } from '../hooks/useRemoveTodo';

const TodoApp = () => {
  const { data, isSuccess } = useTodoList();
  const { mutate: toggle } = useToggleTodo();
  const { mutate: remove } = useRemoveTodo();
  return (
    <div className={'appContainer'}>
      {isSuccess && <TodoList list={data} toggle={toggle} remove={remove} />}
    </div>
  );
};

export default TodoApp;
