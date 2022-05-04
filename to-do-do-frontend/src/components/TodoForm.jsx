import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import TodoButton from "./TodoButton";
import TodoInput from "./TodoInput";
import "../styles/components/TodoButton.scss";
import "../styles/components/TodoForm.scss";

const TodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const createTodo = (e) => {
    e.preventDefault();
    if (todoTitle) {
      const todo = {
        title: todoTitle,
        isCompleted: false,
      };
      setTodoTitle("");
      addTodo(todo);
    }
  };
  return (
    <form className={"todoForm"}>
      <TodoInput
        placeholder={"New amazing todo..."}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <TodoButton className={"todoButton--large"} onClick={createTodo}>
        <ImPlus />
      </TodoButton>
    </form>
  );
};

export default TodoForm;
