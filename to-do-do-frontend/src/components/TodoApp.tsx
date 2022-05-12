import React from 'react';
import TodoList from './TodoList';
import { useTodoList } from '../hooks/useTodoList';
import { useToggleTodo } from '../hooks/useToggleTodo';

const TodoApp = () => {
  const { data, isSuccess } = useTodoList();
  const { mutate: toggle } = useToggleTodo();
  return (
    <div className={'appContainer'}>
      {isSuccess && <TodoList list={data} toggle={toggle} />}
    </div>
  );
};

export default TodoApp;
