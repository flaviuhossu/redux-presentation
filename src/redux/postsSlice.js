import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'posts/getPosts',

  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    );
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.stats = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state, action) => {
      state.stats = 'failed';
    },
  },
});

export default postsSlice.reducer;
