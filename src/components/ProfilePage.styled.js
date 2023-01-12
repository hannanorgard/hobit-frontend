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
  ButtonsContainer: styled.div`
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
    margin: 5% 5%;
    min-width: 50%;
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
    width: 80%;
  `,
  BadgeWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  BadgeImage: styled.img`
    width: 50%;
    @media only screen and (min-width: 60rem) {
      width: 20%;
    }
`,
  BadgeText: styled.h3`
    font-family: Barlow-Regular;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin: 0rem 0rem 1rem 0rem;
    @media only screen and (min-width: 60rem) {
      font-size: 1rem;
    }
`
}