import React, { createContext, useEffect } from "react";
import useTodo from "../hooks/useTodo";

export const TodoContext = createContext();

export function TodoProvider(props) {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, deleteTodo, checkTodo, editTodo } =
    useTodo(initialTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, checkTodo, editTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
