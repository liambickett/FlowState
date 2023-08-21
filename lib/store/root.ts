import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import settingsReducer from './slices/settingsSlice';

export const rootReducer = combineReducers({
  tasks: taskReducer,
  settings: settingsReducer,
});
