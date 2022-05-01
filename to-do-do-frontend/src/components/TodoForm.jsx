import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import TodoInput from "../ui/TodoInput";
import TodoButton from "../ui/TodoButton";

const TodoForm = ({ saveTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const createTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false,
    };
    setTodoTitle("");
    saveTodo(todo);
  };
  return (
    <form className={"todoForm"}>
      <TodoInput
        className={"todoInput"}
        placeholder={"New amazing todo..."}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <TodoButton className={"todoButton"} onClick={createTodo}>
        <ImPlus />
      </TodoButton>
    </form>
  );
};

export default TodoForm;
