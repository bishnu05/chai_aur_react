import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo, clearTodos } =
  todoSlice.actions;

  export default todoSlice.reducer;
// This code defines a Redux slice for managing a todo list. It includes actions to add, remove, toggle, update, and clear todos, using the `createSlice` function from Redux Toolkit. Each todo has an `id` and `text`, and the `nanoid` function is used to generate unique IDs for new todos. The initial state contains one example todo item.