import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Login from 'components/StartPage'
import NotFound from 'components/NotFound'
import ProgramPage from 'components/ProgramPage';

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
          <Route path="/" element={<Login />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
