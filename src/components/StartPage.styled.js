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
    color: #4CACBC;
  `,
  WelcomeText: styled.p`
    font-family: Barlow-Regular;
    text-align: center;
  `,
  LoginOrRegister: styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    place-self: center;
  `,
  RegisterText: styled.label`
    font-family: Unbounded;
    grid-column-start: 4;
    font-size: 12px;
  `,
  LoginText: styled.label`
    font-family: Unbounded;
    font-size: 12px;
    grid-column-start: 6;
  `,
  InputFieldRadio1: styled.input`
    grid-column-start: 5;
  `,
  InputFieldRadio2: styled.input`
    grid-column-start: 7;
  `,
  FormWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-self: center;
  `,
  Labels: styled.label`
    grid-column-start: 2;
    font-family: Unbounded;
    font-size: 11px;
  `,
  InputFieldUsername: styled.input`
    grid-column-start: 2;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
    background-color: none;
    position: absolute;
    top: 58%;
    left: 37%;
    width: 11rem;
    height: 2rem;
  `,
  InputFieldPassword: styled.input`
    grid-column-start: 2;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
    background-color: none;
    position: absolute;
    top: 69%;
    left: 37%;
    width: 11rem;
    height: 2rem;
  `,
  SubmitBtn: styled.button`
    grid-column-start: 2;
    position: absolute;
    top: 88%;
    left: 44%;
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
  `,
  Form: styled.form`
    grid-column-start: 2;
    margin-top: 1.5rem;
  `,
  HeaderImg: styled.img`
    width: 60%;
    grid-column-start: 1;
    place-self: center;
  `
}