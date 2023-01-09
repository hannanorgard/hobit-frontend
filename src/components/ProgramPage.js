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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((store) => store.user.username);
  const selectedCategory = useSelector((store) => store.user.activeProgram);
  const accessToken = useSelector((store) => store.user.accessToken);

  if (!accessToken) {
    navigate('/');
  }

  useEffect(() => {
    if (selectedCategory) {
      navigate('/activeprogram');
    }
  }, [selectedCategory, navigate])

  const handleClick = (category) => {
    // console.log('handleClick invoked')
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
        <Styled.ChallengeP>Change can be hard, but it can also be fun and exciting! Start by picking one aspect of your life that you would like to challenge yourself by building healthier habits.</Styled.ChallengeP>
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
            <Styled.ChallengeP>Don&apos;t worry, be happy. Change can be hard, but it can also be fun and exciting!</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('happiness')}>
              Start
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Health</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/health.jpg" alt="something" />
            <Styled.ChallengeP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('health')}>
              Start
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Confidence</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/confidence.jpg" alt="something" />
            <Styled.ChallengeP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('confidence')}>
              Start
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Focus</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/focus.jpg" alt="something" />
            <Styled.ChallengeP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('focus')}>
              Start
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.ChallengeH2>Serenity</Styled.ChallengeH2>
            <Styled.CardImage src="./assets/card-images/serenity.jpg" alt="something" />
            <Styled.ChallengeP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</Styled.ChallengeP>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('serenity')}>
              Start
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProgramPage;