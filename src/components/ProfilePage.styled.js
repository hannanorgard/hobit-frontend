import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
`,
  ImageContainer: styled.div`
    grid-column-start: 1;
`,
  ProfilePageImage: styled.img`
    width: 25%;
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
  ChallengesButton: styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: none;
    font-family: Unbounded;
    position: absolute;
    right: 14%;
    top: 5%;
`
}