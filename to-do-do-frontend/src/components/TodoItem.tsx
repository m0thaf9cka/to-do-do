import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { TodoItemProps } from "../interfaces/Todo";

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <ListItem>
      <ListItemText primary={todo.title} />
    </ListItem>
  );
};

export default TodoItem;
