import { Input, Paper, TextField } from "@mui/material";
import React, { Component } from "react";
import useFormInput from "../hooks/useFormInput";

function TodoForm({ addTodo }) {
  const [todo, handleTodo, resetTodo] = useFormInput("");

  return (
    <Paper style={{ margin: "1rem 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
          resetTodo();
        }}
      >
        <TextField
          style={{ margin: "0", border: "none" }}
          value={todo}
          margin="normal"
          label="Add new Todo"
          onChange={handleTodo}
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}
export default TodoForm;
