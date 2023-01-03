import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { Styled } from './ActiveProgramPage.styled';

const ActiveProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);
  const activeProgram = useSelector((store) => store.user.activeProgram);
  const activeProgramStartDate = useSelector((store) => store.user.activeProgramStartDate);
  const startDate = new Date(activeProgramStartDate);
  startDate.setHours(0, 0, 0, 0);
  const startDayTimestamp = startDate.getTime();
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  const todaysDateTimestamp = todaysDate.getTime();
  const currentDay = Math.floor((todaysDateTimestamp - startDayTimestamp) / 86400000) + 1;

  const resetActiveProgram = () => {
    // console.log('completeProgram invoked')
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
      });
  };

  if (!accessToken) {
    navigate('/');
  }

  const [objects, setObjects] = useState([]);

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
    dispatch(user.actions.setAccessToken(null));
  };

  if (currentDay > 7) {
    addCompletedProgram();

    return (
      <div>
        <button type="button">PROFILE</button>
        <button type="button" onClick={handleLogout}>LOG OUT</button>
        <h1>Congrats, you completed the week!</h1>
        <button 
          type="button"
          onClick={resetActiveProgram}>
        Woohoo!
        </button>
      </div>
    )
  } else {
    return (
      <Styled.Wrapper>
        <div>
          <button type="button">PROFILE</button>
          <button type="button" onClick={handleLogout}>LOG OUT</button>
        </div>
        <div>
          <h2>You&apos;re on DAY {currentDay} of your {activeProgram} initiative!</h2>
        </div>
        <Styled.ChallengeContainer>
          <div>
            <h3>Past challenges</h3>
            {objects
              .filter((object, index) => index + 1 < currentDay)
              .map((object) => (
                <div>
                  <h1>{object.title}</h1>
                </div>
              ))}
          </div>
          <div>
            <h3>Today&apos;s challenge</h3>
            {/* Map over the objects array and render a component for each object */}
            {objects.map((object, index) => {
              if (index + 1 === currentDay) {
                return (
                  <div>
                    <h1>{object.title}</h1>
                    <h2>{object.description}</h2>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </Styled.ChallengeContainer>
      </Styled.Wrapper>
    )
  }
}

export default ActiveProgramPage;
