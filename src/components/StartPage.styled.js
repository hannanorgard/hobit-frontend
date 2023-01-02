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
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    width: 85%;
    height: 70%;
    padding: 30px;
  `,
  IntroContainer: styled.div`
  
  `,
  WelcomeHeading: styled.h1`
    font-family: Unbounded;
    text-align: center;
    color: #c16046;
  `,
  WelcomeText: styled.p`
    font-family: Barlow-Regular;
    text-align: center;
  `,
  LoginOrRegister: styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    place-self: center;
  `,
  LoginOrRegisterText: styled.label`
    font-family: Barlow-Regular;
  `,
  UsernamePassword: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
  `,
  InputField: styled.input`

  `,
  HeaderImg: styled.img`
    width: 60%;
    grid-column-start: 1;
    place-self: center;
  `
}