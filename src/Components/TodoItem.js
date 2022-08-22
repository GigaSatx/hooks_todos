import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React, { Component } from "react";
import useToggle from "../hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

export default function TodoItem({ todo, deleteTodo, checkTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditTodoForm
            editTodo={editTodo}
            todo={todo}
            toggleIsEditing={toggleIsEditing}
          />
        ) : (
          <>
            <Checkbox
              tabIndex="-1"
              checked={todo.completed}
              onClick={() => checkTodo(todo.id, todo.completed)}
            />
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => deleteTodo(todo.id)}
              >
                <Delete />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
      <Divider />
    </>
  );
}
