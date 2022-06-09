import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './numberSlice';

export default configureStore({
  reducer: {
    number: numberReducer,
  },
});
