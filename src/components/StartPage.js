/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/utils';
import user from 'reducers/user';
import { Styled } from './StartPage.styled';

const StartPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigate('/programs');
    }
  }, [accessToken, navigate])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id))
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setActiveProgram(data.response.activeProgram));
          dispatch(user.actions.setActiveProgramDay(data.response.day));
          dispatch(user.actions.setActiveProgramStartDate(data.response.startDate));
          dispatch(user.actions.setCompletedProgram(data.response.completedPrograms));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null))
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.response));
        }
      })
  }

  return (
    <div>
      <Styled.Wrapper>
        <Styled.HeaderImg src="assets/logo-blue.png" alt="Hobit logo" />
        <Styled.ImageContainer>
          <Styled.StartPageImage src="assets/startpageimg.png" alt="Hiker enjoying the view" />
        </Styled.ImageContainer>
        <Styled.IntroAndLoginContainer>
          <Styled.IntroContainer>
            <Styled.WelcomeHeading>
              Welcome!
            </Styled.WelcomeHeading>
            <Styled.WelcomeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            </Styled.WelcomeText>
          </Styled.IntroContainer>
          <Styled.LoginOrRegister>
            <Styled.RegisterText htmlFor="register">Register</Styled.RegisterText>
            <Styled.InputFieldRadio1 type="radio" id="register" checked={mode === 'register'} onChange={() => setMode('register')} />
            <Styled.LoginText htmlFor="login">Login</Styled.LoginText>
            <Styled.InputFieldRadio2 type="radio" id="login" checked={mode === 'login'} onChange={() => setMode('login')} />
          </Styled.LoginOrRegister>
          <Styled.FormWrapper>
            <Styled.Form onSubmit={onFormSubmit}>
              <Styled.Labels htmlFor="username" id="untext">Username</Styled.Labels>
              <div className="login">
                <Styled.InputFieldUsername
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                <Styled.Labels htmlFor="password" id="pwtext">Password</Styled.Labels>
                <Styled.InputFieldPassword
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Styled.SubmitBtn type="submit">Submit</Styled.SubmitBtn>
              </div>
            </Styled.Form>
          </Styled.FormWrapper>
        </Styled.IntroAndLoginContainer>
      </Styled.Wrapper>
    </div>
  )
}

export default StartPage;