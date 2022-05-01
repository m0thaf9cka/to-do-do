import React from "react";
import "../styles/components/TodoButton.scss";

const TodoButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default TodoButton;
