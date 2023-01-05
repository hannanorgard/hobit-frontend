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
  LoginOrRegister: styled.h3`
    // display: grid;
    // grid-template-columns: repeat(10, 1fr);
    // place-self: center;
    // padding-left: 30px;
  `,
  // RegisterText: styled.label`
  //   font-family: Unbounded;
  //   grid-column-start: 4;
  //   font-size: 12px;
  // `,
  // LoginText: styled.label`
  //   font-family: Unbounded;
  //   font-size: 12px;
  //   grid-column-start: 6;
  // `,
  // InputFieldRadio1: styled.input`
  //   grid-column-start: 5;
  // `,
  // InputFieldRadio2: styled.input`
  //   grid-column-start: 7;
  // `,
  // FormWrapper: styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   place-self: center;
  //   background: #fff;
  //   padding: 30px;
  //   box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  // `,
  // Label: styled.label`
  //   bottom: 10px;
  //   left: 0;
  //   color: grey;
  //   pointer-events: none;
  //   transition: all 0.3s ease;
  // `,
  // InputFieldUsername: styled.input`
  //   grid-column-start: 2;
  //   border-top: none;
  //   border-left: none;
  //   border-right: none;
  //   border-bottom: 1px solid black;
  //   background-color: none;
  // `,
  // InputFieldPassword: styled.input`
  //   grid-column-start: 2;
  //   border-top: none;
  //   border-left: none;
  //   border-right: none;
  //   border-bottom: 1px solid black;
  //   background-color: none;
  // `,
  SubmitButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
  `,
  ModeButton: styled.button`
  border: none;
  background-color: transparent;
  font-family: Unbounded;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
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