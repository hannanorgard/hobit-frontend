import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Styled } from './Loading.styled';

const Loading = () => {
  const isLoading = useSelector((store) => store.user.setLoading);
  const navigate = useNavigate();

  if (!isLoading) {
    navigate('/programs');
  }

  return (
    <Styled.Container>
      <span className="loader" />
    </Styled.Container>
  )
}

export default Loading;