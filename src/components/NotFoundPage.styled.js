import styled from 'styled-components';

export const Styled = {
  PageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ContentContainer: styled.div`
    margin: 10% 5%;
    padding: 1rem;
    text-align: center;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
`,
  Heading: styled.h1`
    font-family: Unbounded;
    font-size: 1.5rem;
  `,
  Text: styled.p`
    font-family: Barlow-Regular;
  `,
  Button: styled.button`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 1rem;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 1rem;
    cursor: pointer;
    @media only screen and (min-width: 60rem) {
      &:active {
        box-shadow: 0 5px #666;
        transform: translateY(4px);
      }
      &:hover {
        background-color: lightblue;
      }
    }
  `
}