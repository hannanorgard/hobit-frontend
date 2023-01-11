import React from 'react';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Container>
      <span className="loader" />
    </Styled.Container>
  )
}

export default Loading;