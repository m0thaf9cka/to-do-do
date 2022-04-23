import React, {useEffect, useState} from 'react';
import TodoService from './api/TodoService';
import TodoList from './components/TodoList';
import {useFetch} from './hooks/useFetch';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [fetchTodoList, isTodoListLoading, todoListErrorMessage] = useFetch(async () => {
    const response = await TodoService.getAll();
    setTodoList(response.data);
  });
  useEffect(() => {
    fetchTodoList().then();
  }, []);
  return (
    <>
      <div>
        {isTodoListLoading && <p>Loading...</p>}
        {todoListErrorMessage && <p>{todoListErrorMessage}</p>}
      </div>
      <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
