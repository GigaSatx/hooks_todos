import React, { createContext, useEffect } from "react";
import { useReducer } from "react";
import todoReducer from "../reducer/todo.reducer";

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  //   const { todos, addTodo, deleteTodo, checkTodo, editTodo } =
  //     useTodo(initialTodos);

  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
