import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`,
  ImageContainer: styled.div`
    grid-column-start: 1;
`,
  ProfilePageImage: styled.img`
    width: 25%;
`
}