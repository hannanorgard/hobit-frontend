import React from 'react';
import { Styled } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Styled.Wrapper>
      <div>
        <Styled.ImageContainer>
          <Styled.ProfilePageImage src="assets/startpageimg.png" alt="Something" />
        </Styled.ImageContainer>
        <p>Username</p>
      </div>
      <div>
        <div>
          <button type="button">VIEW CHALLENGES</button>
          <button type="button">LOG OUT</button>
        </div>
        <div>
          <div>
            <h2>Active Program</h2>
            <p>Happiness (Day 2)</p>
          </div>
          <div>
            <h2>Badges</h2>
            <p>Earn a new badge for every program you successfully complete</p>
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  )
}

export default ProfilePage;