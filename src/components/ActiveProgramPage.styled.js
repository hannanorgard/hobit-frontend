import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    height: 100%;
    width: 100vw;
    // margin-bottom: 10%;
    margin: 10% 0% 5% 0%;
`,
  Header: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  HeaderImg: styled.img`
    width: 20%;
    grid-column-start: 1;
    place-self: center;
    position: absolute;
    left: 5%;
    top: 2.5%;
`,
  LogoutButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    position: absolute;
    right: 7%;
    top: 5%;
  `,
  ProfileButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    position: absolute;
    right: 14%;
    top: 5%;
  `,
  ChallengeContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: masonry;
`,
  DayTitle: styled.h1`
    text-align: center;
    font-family: Unbounded;
  `,
  PreviousChallengesWrapper: styled.div`
    grid-column: 2;
    grid-row: 2;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    width: 83%;
    margin-top: 2rem;
    padding: 1rem;
    height: fit-content;
    overflow-wrap: break-word;
  `,
  ChallengeAndCheckbox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ChallengeImageWrapper: styled.div`
    grid-column: 1;
    grid-row: 1;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    width: 70%;
    height: fit-content;
    margin-left: 5rem;
    margin-top: 2rem;
    padding: 1rem;
  `,
  ProgramImage: styled.img`
    width: 100%;
  `,
  TodaysChallengeWrapper: styled.div`
    grid-column: 2;
    grid-row: 1;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    width: 83%;
    margin-right: 7rem;
    margin-top: 2rem;
    padding: 1rem;
    height: fit-content;
    overflow-wrap: break-word;
  `,
  ChallengeH1: styled.h1`
    font-family: Unbounded;
    font-size: 25px;
  `,
  ChallengeH2: styled.h2`
    font-family: Barlow-Regular;
  `,
  ChallengeH3: styled.h3`
    font-family: Barlow-Regular;
    font-size: 23px;
  `,
  ChallengeH4: styled.h4`
    font-family: Barlow-Regular;
    font-size: 20px;
    overflow-wrap: break-word;
  `,
  Checkbox: styled.input`
    height: 1.5rem;
    justify-self: center;
  `
}