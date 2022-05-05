import React from "react";
import {
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImPencil,
  ImCross,
} from "react-icons/im";
import TodoButton from "./TodoButton";
import "../styles/components/TodoItem.scss";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={"todoItem" + (todo.isCompleted ? "--completed" : "")}>
      <TodoButton
        className={"todoButton--small"}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </TodoButton>
      <p>{todo.title}</p>
      <TodoButton className={"todoButton--small"}>
        <ImPencil />
      </TodoButton>
      <TodoButton
        className={"todoButton--small"}
        onClick={() => removeTodo(todo.id)}
      >
        <ImCross />
      </TodoButton>
    </div>
  );
};

export default TodoItem;
