import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Typography, Paper, AppBar, Grid, Toolbar } from "@mui/material";
import { TodoProvider } from "../Contexts/todos.context";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  // const { todos, addTodo, deleteTodo, checkTodo, editTodo } =
  //   useTodo(initialTodos);

  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#eee",
        }}
        elevation={0}
      >
        <AppBar color="primary" style={{ height: "10vh" }} position="relative">
          <Toolbar>
            <Typography color="inherit">Todos with hooks</Typography>
          </Toolbar>
        </AppBar>
        <Grid container style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Grid item xs={11} sm={9} md={7}>
            <TodoProvider>
              <TodoForm />
              {initialTodos.length ? <TodoList /> : <></>}
            </TodoProvider>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
