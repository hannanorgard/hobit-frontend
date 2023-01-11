import styled from 'styled-components';

export const Styled = {
  Card: styled.div`
    height: 50%;
    width: auto;
    border: 2px solid black;
    margin: auto;
    display: block;
    border-radius: 2em;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 5px 10px 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ChallengeH1: styled.h1`
    font-family: Unbounded;
    font-size: 25px;
    text-align: center;
    margin-top: 40px;
  `,
  ChallengeH2: styled.h1`
    font-family: Unbounded;
    font-size: 21px;
    text-align: center;
  `,
  ChallengeP: styled.p`
    font-family: Barlow-Regular;
    font-size: 18px;
    text-align: center;
    margin-bottom: 2rem;
  `,
  TextDiv: styled.div`
    max-width: 720px;
    margin: 0px auto;
  `,
  CardImage: styled.img`
    margin: 0px auto;
  `,
  Button: styled.button`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 1rem;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 0rem auto;
    cursor: pointer;

    &:active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
    &:hover {
      background-color: lightblue;
    }
  `
}