import React from 'react';
import { Styled } from './Login.styled';

const Login = () => {
  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        <Styled.StartPageImage src="assets/startpageimg.png" alt="Hiker enjoying the view" />
      </Styled.ImageContainer>
      <Styled.IntroAndLoginContainer>
        <Styled.IntroContainer>
          <Styled.WelcomeHeading>
            Welcome!
          </Styled.WelcomeHeading>
          <Styled.WelcomeText>
            Here is our Intro text!
          </Styled.WelcomeText>
        </Styled.IntroContainer>
        <Styled.LoginContainer>
        Here you can log in!
        </Styled.LoginContainer>
      </Styled.IntroAndLoginContainer>
    </Styled.Wrapper>
  )
}

export default Login;