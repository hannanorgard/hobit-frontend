import styled from 'styled-components';

export const Styled = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  Navbar: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 60rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`,
  LogoWrapper: styled.div`
  margin: 1rem 0rem;
  width: 50%;
  @media only screen and (min-width: 60rem) {
    margin: 1rem 0rem 0rem 3rem;
    width: 20%;
  }
`,
  Logo: styled.img`
    width: 100%;
`,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media only screen and (min-width: 60rem) {
      flex-direction: row;
      margin-right: 2rem;
    }
`,
  Button: styled.button`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 1rem;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 0.5rem;
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
`,
  ContentContainer: styled.div`
  @media only screen and (min-width: 60rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,
  MainHeading: styled.h1`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 0.5rem;
    margin: 0.5rem 3rem;
    text-align: center;
    font-family: Unbounded;
    font-size: 1.5rem;
    @media only screen and (min-width: 60rem) {
      font-size: 2rem;
      padding: 1rem;
    }
`,
  ImageWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 1rem;
    background: white;
    padding: 0.5rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    margin: 0.5rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`,
  Image: styled.img`
    width: 80%;
    @media only screen and (min-width: 60rem) {
      width: 60%;
    }
`,
  ChallengesContainer: styled.div`
`,
  TodaysChallengeWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 1rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 0.5rem;
    margin: 0.5rem 3rem;
    overflow-wrap: break-word;
    @media only screen and (min-width: 60rem) {
      padding: 1rem;
      margin: 1rem 3rem;
    }
`,
  PreviousChallengesWrapper: styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 1rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 0.5rem;
    margin: 0.5rem 3rem;
    overflow-wrap: break-word;
    @media only screen and (min-width: 60rem) {
      padding: 1rem;
      margin: 1rem 3rem;
    }
  `,
  ChallengeWrapperHeading: styled.h2`
  font-family: Unbounded;
  font-size: 1.2rem;
  @media only screen and (min-width: 60rem) {
    font-size: 1.5rem;
  }
`,
  ChallengeHeading: styled.h3`
    font-family: Unbounded;
    font-size: 1.4rem;
    @media only screen and (min-width: 60rem) {
      font-size: 1.7rem;
    }
  `,
  ChallengeText: styled.p`
    font-family: Barlow-Regular;
    font-size: 1rem;
    font-weight: bold;
    overflow-wrap: break-word;
    @media only screen and (min-width: 60rem) {
      font-size: 1.1rem;
    }
  `,
  PreviousChallengeHeading: styled.h4`
    font-family: Barlow-Regular;
    font-size: 1rem;
    @media only screen and (min-width: 60rem) {
      font-size: 1.1rem;
    }
  `,
  CompletionContentContainer: styled.div`
    margin: 5% 10%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 1rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
  `,
  CompletionText: styled.p`
    font-family: Barlow-Regular;
    margin: 1rem 3rem;
    text-align: center;
  `,
  CompletionButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 60rem) {
      flex-direction: row;
      justify-content: center;
    }
  `

}