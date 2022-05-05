import React from "react";
import TodoItem from "./TodoItem";
import "../styles/components/TodoList.scss";

const TodoList = ({ todoList, toggleTodo, removeTodo }) => {
  return (
    <div className={"todoList"}>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
