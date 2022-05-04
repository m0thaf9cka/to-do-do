import React from "react";
import TodoItem from "./TodoItem";
import "../styles/components/TodoList.scss";

const TodoList = ({ todoList, removeTodoById }) => {
  return (
    <div className={"todoList"}>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodoById={removeTodoById} />
      ))}
    </div>
  );
};

export default TodoList;
