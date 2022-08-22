import { v4 } from "uuid";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: v4(), task: action.newTask, completed: false }];
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "check":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !action.completed } : todo
      );
    case "edit":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};
export default todoReducer;
