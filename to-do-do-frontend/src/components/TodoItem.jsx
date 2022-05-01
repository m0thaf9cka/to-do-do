import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import TodoButton from "./TodoButton";
import "../styles/components/TodoItem.scss";

const TodoItem = ({ todo }) => {
  return (
    <div className={"todoItem" + (todo.isCompleted ? "--completed" : "")}>
      <TodoButton className={"todoButton--small"}>
        {todo.isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </TodoButton>
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;
