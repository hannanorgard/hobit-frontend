/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { Styled } from './ProfilePage.styled';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const completedPrograms = useSelector((store) => store.user.completedPrograms);
  const username = useSelector((store) => store.user.username);
  const activeProgram = useSelector((store) => store.user.activeProgram);

  const activeProgramStartDate = useSelector((store) => store.user.activeProgramStartDate);
  const startDate = new Date(activeProgramStartDate);
  startDate.setHours(0, 0, 0, 0);
  const startDayTimestamp = startDate.getTime();

  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  const todaysDateTimestamp = todaysDate.getTime();
  const currentDay = Math.floor((todaysDateTimestamp - startDayTimestamp) / 86400000) + 1;

  const handleLogout = () => {
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null))
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setActiveProgram(null));
    dispatch(user.actions.setActiveProgramDay(null));
    dispatch(user.actions.setActiveProgramStartDate(null));
    navigate('/');
  };

  return (
    <Styled.OuterWrapper>
      <Styled.Navbar>
        <Styled.HeaderImg src="assets/logo-blue.png" alt="Hobit logo" />
        <Styled.ButtonsContainer>
          <Styled.ChallengesButton type="button" onClick={() => navigate('/activeprogram')}>VIEW CHALLENGES</Styled.ChallengesButton>
          <Styled.LogoutButton type="button" onClick={handleLogout}>LOG OUT</Styled.LogoutButton>
        </Styled.ButtonsContainer>
      </Styled.Navbar>
      <Styled.InnerWrapper>
        <Styled.UsernameHeading>{username}</Styled.UsernameHeading>
        <Styled.Heading>Active Program</Styled.Heading>
        <Styled.ActiveProgramText>{activeProgram} (Day {currentDay})</Styled.ActiveProgramText>
        <Styled.Heading>Badges</Styled.Heading>
        {completedPrograms && completedPrograms.map((program) => (
          <Styled.BadgesContainer>
            <Styled.Badge key={program} src={`assets/badges/${program}.png`} alt={`${program} badge`} />
            <Styled.BadgeText>{program}</Styled.BadgeText>
          </Styled.BadgesContainer>
        ))}
      </Styled.InnerWrapper>
    </Styled.OuterWrapper>
  )
}

export default ProfilePage;