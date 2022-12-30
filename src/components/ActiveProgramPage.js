import React from 'react';
import { Styled } from './ActiveProgramPage.styled';

const ActiveProgramPage = () => {
  return (
    <Styled.Wrapper>
      <div>
        <button type="button">PROFILE</button>
        <button type="button">LOG OUT</button>
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