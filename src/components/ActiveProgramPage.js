/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { Styled } from './ActiveProgramPage.styled';

const ActiveProgramPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [objects, setObjects] = useState([]);

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

  useEffect(() => {
    if (!activeProgram) {
      navigate('/profile');
    }
  }, [activeProgram, navigate])

  const addCompletedProgram = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        programName: activeProgram
      })
    }
    fetch(`https://hobit-backend-z7k2rr57ca-lz.a.run.app/addCompletedProgram/${username}`, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(user.actions.setCompletedProgram(data.programs.completedPrograms));
      });
  };

  const activeProgramSuccess = () => {
    addCompletedProgram()
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: null,
        day: null,
        startDate: null
      })
    }
    fetch(`https://hobit-backend-z7k2rr57ca-lz.a.run.app/updateActiveProgram/${username}`, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(user.actions.setActiveProgram(data.programs.activeProgram.category));
        dispatch(user.actions.setActiveProgramDay(data.programs.activeProgram.day));
        dispatch(user.actions.setActiveProgramStartDate(data.programs.activeProgram.startDate));
        dispatch(user.actions.setError(null));
      });
  };

  const activeProgramFail = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: null,
        day: null,
        startDate: null
      })
    }
    fetch(`https://hobit-backend-z7k2rr57ca-lz.a.run.app/updateActiveProgram/${username}`, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(user.actions.setActiveProgram(data.programs.activeProgram.category));
        dispatch(user.actions.setActiveProgramDay(data.programs.activeProgram.day));
        dispatch(user.actions.setActiveProgramStartDate(data.programs.activeProgram.startDate));
        dispatch(user.actions.setError(null));
      });
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://hobit-backend-z7k2rr57ca-lz.a.run.app/challenges/${activeProgram}`, options)
      .then((response) => response.json())
      .then((data) => setObjects(data));
  }, [activeProgram]);

  const handleLogout = () => {
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null))
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setActiveProgram(null));
    dispatch(user.actions.setActiveProgramDay(null));
    dispatch(user.actions.setActiveProgramStartDate(null));
    navigate('/');
  };

  if (currentDay > 7) {
    return (
      <Styled.PageContainer>
        <Styled.Navbar>
          <Styled.LogoWrapper>
            <Styled.Logo src="assets/logo-blue.png" alt="Hobit logo" />
          </Styled.LogoWrapper>
          <Styled.ButtonContainer>
            <Styled.Button type="button" onClick={handleLogout}>LOG OUT</Styled.Button>
          </Styled.ButtonContainer>
        </Styled.Navbar>
        <Styled.MainHeading>The week&apos;s over!</Styled.MainHeading>
        <Styled.CompletionContentContainer>
          <Styled.CompletionText>Regardless of whether or not you completed all the challenges, you should be proud of yourself; change is hard.</Styled.CompletionText>
          <Styled.CompletionText>And it doesn&apos;t matter how fast or how far you go on your journey to becoming a better you. The important thing is just that you keep going.</Styled.CompletionText>
          <Styled.CompletionText>If you completed all the challenges this week, you&apos;ve earned a new badge that you can view on your profile page.</Styled.CompletionText>
          <Styled.CompletionText>But if you didn&apos;t, don&apos;t sweat it; you can start over with this program or choose a different one.</Styled.CompletionText>
          <Styled.CompletionText>So, {username}, don&apos;t leave us in suspense any longer. How did it go for you this week?</Styled.CompletionText>
          <Styled.CompletionButtonContainer>
            <Styled.Button type="button" onClick={activeProgramSuccess}>I completed them all!</Styled.Button>
            <Styled.Button type="button" onClick={activeProgramFail}>I didn&apos;t complete them all</Styled.Button>
          </Styled.CompletionButtonContainer>
        </Styled.CompletionContentContainer>
      </Styled.PageContainer>
    )
  } else {
    return (
      <Styled.PageContainer>
        <Styled.Navbar>
          <Styled.LogoWrapper>
            <Styled.Logo src="assets/logo-blue.png" alt="Hobit logo" />
          </Styled.LogoWrapper>
          <Styled.ButtonContainer>
            <Styled.Button type="button" onClick={() => navigate('/profile')}>PROFILE</Styled.Button>
            <Styled.Button type="button" onClick={handleLogout}>LOG OUT</Styled.Button>
          </Styled.ButtonContainer>
        </Styled.Navbar>
        <Styled.MainHeading>You&apos;re on DAY {currentDay} of improving your {activeProgram}!</Styled.MainHeading>
        <Styled.ContentContainer>
          <Styled.ImageWrapper>
            <Styled.Image key={activeProgram} src={`assets/card-images/${activeProgram}.jpg`} alt={`${activeProgram}`} />
          </Styled.ImageWrapper>
          <Styled.ChallengesContainer>
            <Styled.TodaysChallengeWrapper>
              <Styled.ChallengeWrapperHeading>Today&apos;s challenge</Styled.ChallengeWrapperHeading>
              {objects.map((object, index) => {
                if (index + 1 === currentDay) {
                  return (
                    <div>
                      <Styled.ChallengeHeading>{object.title}</Styled.ChallengeHeading>
                      <Styled.ChallengeText>{object.description}</Styled.ChallengeText>
                    </div>
                  );
                }
                return null;
              })}
            </Styled.TodaysChallengeWrapper>
            <Styled.PreviousChallengesWrapper>
              <Styled.ChallengeWrapperHeading>Past challenges</Styled.ChallengeWrapperHeading>
              {objects
                .filter((object, index) => index + 1 < currentDay)
                .map((object) => (
                  <Styled.PreviousChallengeHeading>{object.title}</Styled.PreviousChallengeHeading>
                ))}
            </Styled.PreviousChallengesWrapper>
          </Styled.ChallengesContainer>
        </Styled.ContentContainer>
      </Styled.PageContainer>
    )
  }
}

export default ActiveProgramPage;