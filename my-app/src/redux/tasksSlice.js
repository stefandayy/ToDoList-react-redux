import { createSlice } from "@reduxjs/toolkit";

// 1 creo lo slice che contiene lo state e i reducers
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, name: "Debug your code", completed: false },
    { id: 2, name: "Find the bug", completed: false },
    { id: 3, name: "Commit your code", completed: false },
    { id: 4, name: "Make coffee", completed: false },
    { id: 5, name: "Clean your code", completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
        completed: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
