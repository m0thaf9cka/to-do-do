import React, { useState } from "react";
import {
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImCross,
} from "react-icons/im";
import TodoButton from "./TodoButton";
import TodoInput from "./TodoInput";
import "../styles/components/TodoItem.scss";

const TodoItem = ({ todo, toggleTodo, editTodo, removeTodo }) => {
  const [todoItem, setTodoItem] = useState(todo);
  const updateTodo = (e) => {
    e.preventDefault();
    if (todoItem.title !== todo.title && todoItem.title.trim()) {
      editTodo(todoItem);
    } else {
      setTodoItem(todo);
    }
  };
  return (
    <div className={"todoItem" + (todo.isCompleted ? "--completed" : "")}>
      <TodoButton
        className={"todoButton--small"}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </TodoButton>
      <form onSubmit={(e) => updateTodo(e)}>
        <TodoInput
          value={todoItem.title}
          onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
          onBlur={(e) => updateTodo(e)}
        />
      </form>
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
