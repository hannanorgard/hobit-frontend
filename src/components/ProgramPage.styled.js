import styled from 'styled-components';

export const Styled = {
  PageContainer: styled.div`
    margin: 0rem 2rem;
  `,
  TextContainer: styled.div`
    max-width: 720px;
    margin: 0px auto;
    padding: 1rem;
`,
  PageHeading: styled.h1`
    font-family: Unbounded;
    text-align: center;
    margin-top: 2rem;
    padding: 0.3rem;
    background-color: white;
    border: 2px solid black;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`,
  IntroText: styled.p`
    font-family: Barlow-Regular;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.3rem;
    background-color: white;
    border: 2px solid black;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`,
  Card: styled.div`
    width: 100%;
    min-width: 10rem;
    margin: 1% 5%;
    border: 2px solid black;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  CardTitle: styled.h1`
    font-family: Unbounded;
    text-align: center;
    font-size: 1.5rem;
  `,
  CardImage: styled.img`
  margin: 0px auto;
`,
  CardText: styled.p`
    font-family: Barlow-Regular;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.3rem;
  `,
  Button: styled.button`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 1rem;
    background-color: none;
    font-family: Unbounded;
    width: 8rem;
    height: 2rem;
    cursor: pointer;
    margin: 1rem auto;
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