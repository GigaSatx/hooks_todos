import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../Contexts/todos.context";
import useFormInput from "../hooks/useFormInput";

export default function EditTodoForm({ todo, toggleIsEditing }) {
  const { editTodo } = useContext(TodoContext);
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
