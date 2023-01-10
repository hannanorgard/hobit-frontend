import styled from 'styled-components';

export const Styled = {
  OuterWrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`,
  Navbar: styled.div`
    display: flex;
    justify-content: space-between;
`,
  InnerWrapper: styled.div`
    margin: 5% 20%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  HeaderImg: styled.img`
    width: 20%;
    margin: 1%;
`,
  Badge: styled.img`
    width: 20%;
  `,
  ButtonsContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1%;
`,
  LogoutButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 1rem;
`,
  ChallengesButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    width: 10rem;
    height: 2rem;
    margin: 1rem;
`,
  UsernameHeading: styled.h1`
    font-family: Unbounded;
    text-transform: uppercase;
  `,
  Heading: styled.h2`
    font-family: Unbounded;
`,
  ActiveProgramText: styled.p`
    font-family: Barlow-Regular;
    text-transform: uppercase;
    margin: 0rem 0rem 1rem 0rem;
  `,
  BadgesContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BadgeText: styled.h3`
  font-family: Barlow-Regular;
  text-transform: uppercase;
  margin: 0rem 0rem 1rem 0rem;
`
}