import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaskSliceState {
  tasks: Task[];
  date: {
    day: number;
    month: number;
    year: number;
  };
}

const initialState: TaskSliceState = {
  tasks: [],
  date: {
    day: 0,
    month: 0,
    year: 0,
  },
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    incrementDate: (state) => {
      const newDate = new Date(
        state.date.year,
        state.date.month - 1,
        state.date.day + 1
      ); // JS months are 0-indexed
      state.date.day = newDate.getDate();
      state.date.month = newDate.getMonth() + 1;
      state.date.year = newDate.getFullYear();
    },
    decrementDate: (state) => {
      const newDate = new Date(
        state.date.year,
        state.date.month - 1,
        state.date.day - 1
      );
      state.date.day = newDate.getDate();
      state.date.month = newDate.getMonth() + 1;
      state.date.year = newDate.getFullYear();
    },
    setDate: (
      state,
      action: PayloadAction<{ day: number; month: number; year: number }>
    ) => {
      state.date = action.payload;
    },
  },
});

export const { addTask, incrementDate, decrementDate, setDate } =
  taskSlice.actions;

export default taskSlice.reducer;
