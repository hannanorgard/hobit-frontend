import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    activeProgram: null,
    activeProgramDay: null,
    activeProgramStartDate: null,
    completedPrograms: [''],
    error: null,
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setActiveProgram: (store, action) => {
      store.activeProgram = action.payload;
    },
    setActiveProgramDay: (store, action) => {
      store.activeProgramDay = action.payload;
    },
    setActiveProgramStartDate: (store, action) => {
      store.activeProgramStartDate = action.payload;
    },
    setCompletedProgram: (store, action) => {
      store.completedPrograms = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
});

export default user;