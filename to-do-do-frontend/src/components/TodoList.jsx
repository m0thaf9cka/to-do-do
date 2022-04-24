import React from "react";

const TodoList = ({ todoList }) => {
  return (
    <>
      <div>
        {todoList.map((todo) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </>
  );
};

export default TodoList;
