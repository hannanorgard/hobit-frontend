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
    margin: 0px auto;
  `,
  IntroContainer: styled.div`
  
  `,
  Error: styled.p`
  color: red;
  font-family: Barlow-Regular;
  font-weight: bold;
  `,
  WelcomeHeading: styled.h1`
    font-family: Unbounded;
    text-align: center;
    color: #4CACBC;
  `,
  WelcomeText: styled.p`
    font-family: Barlow-Regular;
    text-align: center;
    margin: 0em 2em;
    font-size: 1.2em;
  `,
  LoginOrRegister: styled.h3`
    // display: grid;
    // grid-template-columns: repeat(10, 1fr);
    // place-self: center;
    // padding-left: 30px;
    text-align: center;
    margin-top: 3em;
  `,
  SubmitButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    font-weight: bold;
    margin-top: 1em;
    width: 10em;
    height: 2em;
    cursor: pointer;
    border-radius: 2em;

    &:active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  HeaderImg: styled.img`
    width: 60%;
    grid-column-start: 1;
    place-self: center;
  `
}