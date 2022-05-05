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
    const response = await TodoService.save(todo);
    if (response.status === 200) {
      setTodoList([...todoList, response.data]);
    }
  };
  const toggleTodo = async (id) => {
    const response = await TodoService.toggle(id);
    if (response.status === 200) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    }
  };
  const editTodo = async (todo) => {
    const response = await TodoService.save(todo);
    if (response.status === 200) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === response.data.id
            ? { ...todo, title: response.data.title }
            : todo
        )
      );
    }
  };
  const removeTodo = async (id) => {
    const response = await TodoService.remove(id);
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
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
