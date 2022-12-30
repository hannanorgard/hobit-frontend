import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartPage from 'components/StartPage';
import NotFoundPage from 'components/NotFoundPage';
import ProgramPage from 'components/ProgramPage';
import ProfilePage from 'components/ProfilePage';
import ActiveProgramPage from 'components/ActiveProgramPage';

import user from 'reducers/user';

const reducer = combineReducers({
  user: user.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/activeprogram" element={<ActiveProgramPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
