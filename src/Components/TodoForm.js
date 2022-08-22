import { Input, Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../Contexts/todos.context";
import useFormInput from "../hooks/useFormInput";

function TodoForm() {
  const [todo, handleTodo, resetTodo] = useFormInput("");
  const { dispatch } = useContext(TodoContext);

  return (
    <Paper style={{ margin: "1rem 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", newTask: todo });
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
