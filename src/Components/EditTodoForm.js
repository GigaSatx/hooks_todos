import { TextField } from "@mui/material";
import React from "react";
import useFormInput from "../hooks/useFormInput";

export default function EditTodoForm({ todo, editTodo, toggleIsEditing }) {
  const [input, handleInput, handleReset] = useFormInput(todo.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(input, todo.id);
        handleReset();
        toggleIsEditing();
      }}
      style={{ width: "100%" }}
    >
      <TextField fullWidth autoFocus value={input} onChange={handleInput} />
    </form>
  );
}
