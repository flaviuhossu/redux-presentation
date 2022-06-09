import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './numberSlice';
import postsReducer from './postsSlice';

export default configureStore({
  reducer: {
    number: numberReducer,
    post: postsReducer,
  },
});
