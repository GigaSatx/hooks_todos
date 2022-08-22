import React, { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

export default function useTodo(initialVal) {
  const [todos, setTodos] = useState(initialVal);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: v4(), task: newTodoText, completed: false }]);
    },
    deleteTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    checkTodo: (id) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (newTask, id) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodo);
    },
  };
}
