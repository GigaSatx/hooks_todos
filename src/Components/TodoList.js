import React, { useContext } from "react";
import { Paper, List } from "@mui/material";
import TodoItem from "./TodoItem";
import { TodoContext } from "../Contexts/todos.context";

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Paper>
  );
}
