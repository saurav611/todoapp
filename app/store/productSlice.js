import { createSlice } from "@reduxjs/toolkit";

const intialstate = {
  task: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});
export const { addTask, removeTask } = productSlice.actions;
export default productSlice.reducer;
