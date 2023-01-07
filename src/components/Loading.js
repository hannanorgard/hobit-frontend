import React from 'react';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <span className="loader" />
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Loading;