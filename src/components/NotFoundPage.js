import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Styled } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.Heading>Uh oh, looks like you took a wrong turn.</Styled.Heading>
      <Styled.Text>But don&apos;t worry, here&apos;s the way back to the start page.</Styled.Text>
      <Styled.Button type="button" onClick={() => navigate('/')}>TAKE ME HOME</Styled.Button>
    </Styled.Container>
  )
}

export default NotFoundPage;