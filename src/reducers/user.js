import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    programs: {
      activeProgram: {
        category: null,
        day: null,
        startDate: null
      },
      completedPrograms: ['']
    },
    error: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setUserId: (store, action) => {
      store.userIderror = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setPrograms: (store, action) => {
      store.programs = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

export default user;