import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`,
  ImageContainer: styled.div`
  grid-column-start: 1;
  `,
  StartPageImage: styled.img`
    width: 100%;
  `,
  IntroAndLoginContainer: styled.div`
  grid-column-start: 2;
  `,
  IntroContainer: styled.div`
  
  `,
  WelcomeHeading: styled.h1`
    font-family: Unbounded;
  `,
  WelcomeText: styled.p`

  `,
  LoginContainer: styled.div`
  
  `
}