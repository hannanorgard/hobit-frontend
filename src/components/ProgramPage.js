/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper';
import { Styled } from './ProgramPage.styled';

const ProgramPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useSelector((store) => store.user.username);
  const selectedCategory = useSelector((store) => store.user.activeProgram);
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate])

  useEffect(() => {
    if (selectedCategory) {
      navigate('/activeprogram');
    }
  }, [selectedCategory, navigate])

  const handleClick = (category) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category,
        day: 1,
        startDate: new Date()
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

  return (
    <>
      <Styled.TextDiv>
        <Styled.ChallengeH1>What do you want to improve about yourself?</Styled.ChallengeH1>
        <Styled.ChallengeP>
          Change can be hard, but it can also be fun and exciting!
          Start by picking one aspect of your life that you would like to challenge yourself by building healthier habits.
        </Styled.ChallengeP>
      </Styled.TextDiv>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.5
        }}
        pagination
        modules={[EffectCoverflow]}
        className="mySwiper">
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Happiness</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/happiness.jpg" alt="something" />
            <Styled.ChallengeP>Turn that frown upside down! A happy you is a healthy you.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('happiness')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Health</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/health.jpg" alt="something" />
            <Styled.ChallengeP>Your body&apos;s meant to last a lifetime. Take care of it! </Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('health')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Confidence</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/confidence.jpg" alt="something" />
            <Styled.ChallengeP>Hey there, handsome.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('confidence')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Focus</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/focus.jpg" alt="something" />
            <Styled.ChallengeP>Starve your distractions; feed your focus.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('focus')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Serenity</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/serenity.jpg" alt="something" />
            <Styled.ChallengeP>&quot;To a mind that is still, the whole universe surrenders.&quot;</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('serenity')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProgramPage;