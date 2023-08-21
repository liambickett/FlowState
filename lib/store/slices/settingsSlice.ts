import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    startHour: 8,
    endHour: 21,
  },
  reducers: {},
});

export default settingsSlice.reducer;
