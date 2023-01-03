import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { Styled } from './ProfilePage.styled';

const ProfilePage = () => {
  const completedPrograms = useSelector((store) => store.user.completedPrograms);
  const username = useSelector((store) => store.user.username);
  const activeProgram = useSelector((store) => store.user.activeProgram);
  const activeProgramDay = useSelector((store) => store.user.activeProgramDay);
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!accessToken) {
    navigate('/');
  }

  const handleLogout = () => {
    dispatch(user.actions.setAccessToken(null));
  };

  return (
    <Styled.Wrapper>
      <div>
        <Styled.ImageContainer>
          <Styled.ProfilePageImage src="assets/startpageimg.png" alt="Something" />
        </Styled.ImageContainer>
        <p>{username}</p>
      </div>
      <div>
        <div>
          <button type="button" onClick={() => navigate('/activeprogram')}>VIEW CHALLENGES</button>
          <button type="button" onClick={handleLogout}>LOG OUT</button>
        </div>
        <div>
          <div>
            <h2>Active Program</h2>
            <p>{activeProgram} (Day {activeProgramDay})</p>
          </div>
          <div>
            <h2>Badges</h2>
            <p>Earn a new badge for every program you successfully complete</p>
            {completedPrograms.map((program) => (
              <img key={program} src={`assets/badges/${program}.png`} alt={`${program} badge`} />
            ))}
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  )
}

export default ProfilePage;