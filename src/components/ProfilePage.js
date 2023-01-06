import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { Styled } from './ProfilePage.styled';

const ProfilePage = () => {
  const completedPrograms = useSelector((store) => store.user.completedPrograms);
  const username = useSelector((store) => store.user.username);
  const activeProgram = useSelector((store) => store.user.activeProgram);
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeProgramStartDate = useSelector((store) => store.user.activeProgramStartDate);
  const startDate = new Date(activeProgramStartDate);
  startDate.setHours(0, 0, 0, 0);
  const startDayTimestamp = startDate.getTime();
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  const todaysDateTimestamp = todaysDate.getTime();
  const currentDay = Math.floor((todaysDateTimestamp - startDayTimestamp) / 86400000) + 1;

  // const [selectedImage, setSelectedImage] = useState(null);

  if (!accessToken) {
    navigate('/');
  }

  const handleLogout = () => {
    dispatch(user.actions.setAccessToken(null));
  };

  return (
    <>
      <div>
        <Styled.ChallengesButton type="button" onClick={() => navigate('/activeprogram')}>VIEW CHALLENGES</Styled.ChallengesButton>
        <Styled.LogoutButton type="button" onClick={handleLogout}>LOG OUT</Styled.LogoutButton>
      </div>
      <Styled.Wrapper>
        <div>
          <Styled.ImageContainer>
            <Styled.ProfilePageImage src="assets/startpageimg.png" alt="Something" />
          </Styled.ImageContainer>
          <p>{username}</p>
        </div>
        <div>

          <div>
            <div>
              <h2>Active Program</h2>
              <p>{activeProgram} (Day {currentDay})</p>
            </div>
            <div>
              <h2>Badges</h2>
              {completedPrograms && completedPrograms.map((program) => (
                <img key={program} src={`assets/badges/${program}.png`} alt={`${program} badge`} />
              ))}
            </div>
          </div>
        </div>
      </Styled.Wrapper>
    </>
  )
}

export default ProfilePage;