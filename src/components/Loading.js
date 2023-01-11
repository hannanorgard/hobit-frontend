import React from 'react';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Wrapper>
      <span className="loader" />
    </Styled.Wrapper>
  )
}

export default Loading;