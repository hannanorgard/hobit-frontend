import styled from 'styled-components';

export const Styled = {
  PageContainer: styled.div`
`,
  Navbar: styled.div`
    display: flex;
    justify-content: space-between;
`,
  Logo: styled.img`
    width: 20%;
    margin: 1rem;
`,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
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

    &:active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
    &:hover {
      background-color: lightblue;
    }
`,
  ContentContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`,
  MainHeading: styled.h1`
    text-align: center;
    font-family: Unbounded;
`,
  ChallengesContainer: styled.div`
    display: flex;
    flex-direction: column;
`,
  ImageWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 1rem;
    margin: 3rem 0rem 3rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`,
  Image: styled.img`
    width: 65%;
`,
  TodaysChallengeWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 1rem;
    margin: 3rem 3rem 0rem 3rem;
    overflow-wrap: break-word;
`,
  PreviousChallengesWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 1rem;
    margin: 3rem;
    overflow-wrap: break-word;
  `,
  ChallengeWrapperHeading: styled.h2`
  font-family: Unbounded;
  font-size: 1.5rem;
`,
  ChallengeHeading: styled.h3`
    font-family: Unbounded;
    font-size: 2rem;
  `,
  ChallengeText: styled.p`
    font-family: Barlow-Regular;
    font-size: 1.3rem;
    font-weight: bold;
    overflow-wrap: break-word;
  `,
  PreviousChallengeHeading: styled.h4`
    font-family: Barlow-Regular;
    font-size: 1.2rem;
  `,
  CompletionContentContainer: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
  `,
  CompletionText: styled.p`
    font-family: Barlow-Regular;
    margin: 1rem 25%;
    text-align: center;
  `,
  CompletionButtonContainer: styled.div`
    display: flex;
    justify-content: center;
  `

}