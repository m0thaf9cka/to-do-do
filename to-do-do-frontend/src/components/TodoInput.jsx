import React from "react";
import "../styles/components/TodoInput.scss";

const TodoInput = React.forwardRef((props, ref) => {
  return <input className={"todoInput"} {...props} ref={ref} />;
});

export default TodoInput;
