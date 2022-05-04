import React, { useEffect, useState } from "react";
import TodoService from "./api/TodoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useFetch } from "./hooks/useFetch";
import "./styles/App.scss";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [fetchTodoList, isTodoListLoading, todoListErrorMessage] = useFetch(
    async () => {
      const response = await TodoService.getAll();
      setTodoList(response.data);
    }
  );
  const addTodo = async (todo) => {
    const response = await TodoService.add(todo);
    if (response.status === 200) {
      setTodoList([...todoList, response.data]);
    }
  };
  const removeTodoById = async (id) => {
    const response = await TodoService.removeById(id);
    if (response.status === 200) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
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
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todoList} removeTodoById={removeTodoById} />
    </div>
  );
};

export default App;
