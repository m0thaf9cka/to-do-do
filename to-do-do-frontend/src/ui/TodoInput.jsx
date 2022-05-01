import React from "react";

const TodoInput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default TodoInput;
