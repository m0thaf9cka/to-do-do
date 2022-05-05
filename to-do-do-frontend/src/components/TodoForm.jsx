import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import TodoButton from "./TodoButton";
import TodoInput from "./TodoInput";
import "../styles/components/TodoButton.scss";
import "../styles/components/TodoForm.scss";

const TodoForm = ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
    isCompleted: false,
  });
  const createTodo = (e) => {
    e.preventDefault();
    if (todoItem.title.trim()) {
      setTodoItem({ ...todoItem, title: "" });
      addTodo(todoItem);
    }
  };
  return (
    <form className={"todoForm"}>
      <TodoInput
        placeholder={"New amazing todo..."}
        value={todoItem.title}
        onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
      />
      <TodoButton
        className={"todoButton--large"}
        onClick={(e) => createTodo(e)}
      >
        <ImPlus />
      </TodoButton>
    </form>
  );
};

export default TodoForm;
