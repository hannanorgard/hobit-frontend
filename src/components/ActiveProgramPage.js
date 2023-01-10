/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { Styled } from './ActiveProgramPage.styled';

const ActiveProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((store) => store.user.username);
  const activeProgram = useSelector((store) => store.user.activeProgram);
  const activeProgramStartDate = useSelector((store) => store.user.activeProgramStartDate);
  const [objects, setObjects] = useState([]);
  const startDate = new Date(activeProgramStartDate);
  startDate.setHours(0, 0, 0, 0);
  const startDayTimestamp = startDate.getTime();
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  const todaysDateTimestamp = todaysDate.getTime();
  const currentDay = Math.floor((todaysDateTimestamp - startDayTimestamp) / 86400000) + 1;

  const addCompletedProgram = () => {
    console.log('addCompletedProgram invoked')
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
        console.log(data)
        dispatch(user.actions.setCompletedProgram(data.programs.completedPrograms));
      });
  };

  const activeProgramSuccess = () => {
    addCompletedProgram()
    console.log('activeProgramSuccess invoked')
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
        console.log(data)
        dispatch(user.actions.setActiveProgram(data.programs.activeProgram.category));
        dispatch(user.actions.setActiveProgramDay(data.programs.activeProgram.day));
        dispatch(user.actions.setActiveProgramStartDate(data.programs.activeProgram.startDate));
        dispatch(user.actions.setError(null));
      });
  };

  const activeProgramFail = () => {
    console.log('activeProgramFail invoked')
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
        console.log(data)
        dispatch(user.actions.setActiveProgram(data.programs.activeProgram.category));
        dispatch(user.actions.setActiveProgramDay(data.programs.activeProgram.day));
        dispatch(user.actions.setActiveProgramStartDate(data.programs.activeProgram.startDate));
        dispatch(user.actions.setError(null));
      });
  };

  // if (!accessToken) {
  //   navigate('/');
  // }

  if (!activeProgram) {
    navigate('/programs');
  }

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
      <div>
        <Styled.HeaderImg src="assets/logo-blue.png" alt="Hobit logo" />
        <h1>The week&apos;s over!</h1>
        <p>Regardless of whether or not you completed all the challenges, you should be proud of yourself; change is hard.</p>
        <p>And it doesn&apos;t matter how fast or how far you go on your journey to becoming a better you. The important thing is just that you keep going.</p>
        <p>If you completed all the challenges this week, you&apos;ve earned a new badge that you can view on your profile page.</p>
        <p>But if you didn&apos;t, don&apos;t sweat it; you can start over with this program or choose a different one.</p>
        <p>So, don&apos;t leave us in suspense any longer: How did it go for you this week?</p>
        <button
          type="button"
          onClick={activeProgramSuccess}>
            I completed all the challenges!
        </button>
        <button
          type="button"
          onClick={activeProgramFail}>
            I didn&apos;t complete all the challenges
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <Styled.HeaderImg src="assets/logo-blue.png" alt="Hobit logo" />
        <Styled.Wrapper>
          <Styled.Header>
            <Styled.ProfileButton type="button" onClick={() => navigate('/profile')}>PROFILE</Styled.ProfileButton>
            <Styled.LogoutButton type="button" onClick={handleLogout}>LOG OUT</Styled.LogoutButton>
          </Styled.Header>
          <div>
            <Styled.DayTitle>You&apos;re on DAY {currentDay} of your {activeProgram} initiative!</Styled.DayTitle>
          </div>
          <Styled.ChallengeContainer>
            <Styled.ChallengeImageWrapper>
              <Styled.ProgramImage key={activeProgram} src={`assets/card-images/${activeProgram}.jpg`} alt={`${activeProgram}`} />
            </Styled.ChallengeImageWrapper>
            <div>
              <Styled.TodaysChallengeWrapper>
                <div>
                  <Styled.ChallengeH3>Today&apos;s challenge</Styled.ChallengeH3>
                  {/* Map over the objects array and render a component for each object */}
                  {objects.map((object, index) => {
                    if (index + 1 === currentDay) {
                      return (
                        <div>
                          <Styled.ChallengeH1>{object.title}</Styled.ChallengeH1>
                          <Styled.ChallengeH2>{object.description}</Styled.ChallengeH2>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </Styled.TodaysChallengeWrapper>
              <Styled.PreviousChallengesWrapper>
                <div>
                  <Styled.ChallengeH3>Past challenges</Styled.ChallengeH3>
                  {objects
                    .filter((object, index) => index + 1 < currentDay)
                    .map((object) => (
                      <Styled.ChallengeAndCheckbox>
                        <Styled.ChallengeH4>{object.title}</Styled.ChallengeH4>
                        <Styled.Checkbox type="checkbox" defaultChecked />
                      </Styled.ChallengeAndCheckbox>
                    ))}
                </div>
              </Styled.PreviousChallengesWrapper>
            </div>
          </Styled.ChallengeContainer>
        </Styled.Wrapper>
      </div>
    )
  }
}

export default ActiveProgramPage;