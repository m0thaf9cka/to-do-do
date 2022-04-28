import React from "react";

const TodoList = ({ todoList }) => {
  return (
    <>
      <div>
        {todoList.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </>
  );
};

export default TodoList;
