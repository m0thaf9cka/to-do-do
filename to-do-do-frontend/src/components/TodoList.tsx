import React from "react";
import { useQuery } from "react-query";
import { List } from "@mui/material";
import TodoService from "../api/TodoService";
import TodoItem from "./TodoItem";
import { Todo } from "../interfaces/Todo";

const TodoList = () => {
  const { data, isSuccess } = useQuery("todoList", () => TodoService.getAll());
  return (
    <List>
      {isSuccess &&
        data?.map((item: Todo) => <TodoItem key={item.id} todo={item} />)}
    </List>
  );
};

export default TodoList;
