import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { Styled } from './ActiveProgramPage.styled';

const ActiveProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);

  if (!accessToken) {
    navigate('/');
  }

  const handleLogout = () => {
    dispatch(user.actions.setAccessToken(null));
  };

  return (
    <Styled.Wrapper>
      <div>
        <button type="button">PROFILE</button>
        <button type="button" onClick={handleLogout}>LOG OUT</button>
      </div>
      <div>
        <h2>You&apos;re on DAY 2 of your happiness initiative!</h2>
      </div>
      <Styled.ChallengeContainer>
        <div>
          <h3>Completed challenges</h3>
        </div>
        <div>
          <h3>Today&apos;s challenge</h3>
        </div>
      </Styled.ChallengeContainer>
    </Styled.Wrapper>
  )
}

export default ActiveProgramPage;