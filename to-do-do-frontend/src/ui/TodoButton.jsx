import React from "react";

const TodoButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default TodoButton;
