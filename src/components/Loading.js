import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Container>
      <span className="loader" />
    </Styled.Container>
  )
}

export default Loading;