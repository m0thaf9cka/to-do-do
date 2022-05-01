import React, { useEffect, useState } from "react";
import "./App.css";
import TodoService from "./api/TodoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [fetchTodoList, isTodoListLoading, todoListErrorMessage] = useFetch(
    async () => {
      const response = await TodoService.getAll();
      setTodoList(response.data);
    }
  );
  const saveTodo = async (todo) => {
    const response = await TodoService.create(todo);
    if (response.status === 200) {
      setTodoList([...todoList, todo]);
    }
  };
  useEffect(() => {
    fetchTodoList().then();
  }, []);
  return (
    <div className={"app"}>
      <div>
        {isTodoListLoading && <p>Loading...</p>}
        {todoListErrorMessage && <p>{todoListErrorMessage}</p>}
      </div>
      <TodoForm saveTodo={saveTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
