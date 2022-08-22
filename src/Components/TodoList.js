import React, { Component } from "react";
import { Paper, List, Divider, ListItem, ListItemText } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, checkTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
}
