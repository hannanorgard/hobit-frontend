import React from 'react';
import { Styled } from './StartPage.styled';
import Login from './Login';

const StartPage = () => {
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
          <Login />
        </Styled.LoginContainer>
      </Styled.IntroAndLoginContainer>
    </Styled.Wrapper>
  )
}

export default StartPage;