import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'reducers/user';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn(mode, username, password));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username" />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
      </label>
      <button type="submit">Log in</button>
      <button type="button" onClick={() => setMode('register')}>Not registered yet?</button>
    </form>
  )
}

export default Form;