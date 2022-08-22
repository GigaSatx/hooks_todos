import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { DispatchContext } from "../Contexts/todos.context";
import useFormInput from "../hooks/useFormInput";

export default function EditTodoForm({ todo, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [input, handleInput, handleReset] = useFormInput(todo.task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "edit", newTask: input, id: todo.id });
        handleReset();
        toggleIsEditing();
      }}
      style={{ width: "100%" }}
    >
      <TextField fullWidth autoFocus value={input} onChange={handleInput} />
    </form>
  );
}
