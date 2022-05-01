import React from "react";
import TodoItem from "./TodoItem";
import "../styles/components/TodoList.scss";

const TodoList = ({ todoList }) => {
  return (
    <div className={"todoList"}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
