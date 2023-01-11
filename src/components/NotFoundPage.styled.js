import styled from 'styled-components';

export const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 20%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 1rem 3rem;
    align-items: center;
`,
  Heading: styled.h1`
  font-family: Unbounded;
  `,
  Text: styled.p`
    font-family: Barlow-Regular;
  `,
  Button: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 1rem;
  `
}