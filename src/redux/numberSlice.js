import { createSlice } from '@reduxjs/toolkit';

export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = numberSlice.actions;

export default numberSlice.reducer;
