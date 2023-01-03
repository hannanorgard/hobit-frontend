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
    error: null
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
      // console.log('setActiveProgram'
      store.activeProgram = action.payload;
    },
    setActiveProgramDay: (store, action) => {
      // console.log('setActiveProgramDay')
      store.activeProgramDay = action.payload;
    },
    setActiveProgramStartDate: (store, action) => {
      // console.log('setActiveProgramStartDate')
      store.activeProgramStartDate = action.payload;
    },
    setCompletedProgram: (store, action) => {
      store.completedPrograms.push(action.payload);
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

export default user;