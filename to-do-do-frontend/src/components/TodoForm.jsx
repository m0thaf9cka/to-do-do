import React, { useState } from "react";

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
    <form>
      <input
        placeholder={"New todo"}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={createTodo}>Add</button>
    </form>
  );
};

export default TodoForm;
