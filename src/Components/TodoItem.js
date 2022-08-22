import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../Contexts/todos.context";
import useToggle from "../hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditTodoForm todo={todo} toggleIsEditing={toggleIsEditing} />
        ) : (
          <>
            <Checkbox
              tabIndex="-1"
              checked={todo.completed}
              onClick={() =>
                dispatch({
                  type: "check",
                  id: todo.id,
                  completed: todo.completed,
                })
              }
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
                onClick={() => dispatch({ type: "delete", id: todo.id })}
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
