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
        dispatch(user.actions.setActiveProgram(data.programs.activeProgram.category));
        dispatch(user.actions.setActiveProgramDay(data.programs.activeProgram.day));
        dispatch(user.actions.setActiveProgramStartDate(data.programs.activeProgram.startDate));
        dispatch(user.actions.setError(null));
      });
  };

  return (
    <Styled.PageContainer>
      <Styled.TextContainer>
        <Styled.PageHeading>What do you want to improve about yourself?</Styled.PageHeading>
        <Styled.IntroText>
          Change can be hard, but it can also be fun and exciting!
          Start by picking one area of your life in which you would like to build healthier habits.
        </Styled.IntroText>
      </Styled.TextContainer>
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
          slideShadows: false,
          scale: 0.5
        }}
        pagination
        modules={[EffectCoverflow]}
        className="mySwiper">
        <SwiperSlide>
          <Styled.Card>
            <Styled.CardTitle>Happiness</Styled.CardTitle>
            <Styled.CardImage src="./assets/card-images/happiness.jpg" alt="happy woman" />
            <Styled.CardText>Turn that frown upside down! A happy you is a healthy you.</Styled.CardText>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('happiness')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.CardTitle>Health</Styled.CardTitle>
            <Styled.CardImage src="./assets/card-images/health.jpg" alt="healthy woman" />
            <Styled.CardText>Your body&apos;s meant to last a lifetime. Take care of it! </Styled.CardText>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('health')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.CardTitle>Confidence</Styled.CardTitle>
            <Styled.CardImage src="./assets/card-images/confidence.jpg" alt="confident man" />
            <Styled.CardText>Hey there, handsome.</Styled.CardText>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('confidence')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.CardTitle>Focus</Styled.CardTitle>
            <Styled.CardImage src="./assets/card-images/focus.jpg" alt="focused woman" />
            <Styled.CardText>Starve your distractions; feed your focus.</Styled.CardText>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('focus')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <Styled.CardTitle>Serenity</Styled.CardTitle>
            <Styled.CardImage src="./assets/card-images/serenity.jpg" alt="serene woman" />
            <Styled.CardText>&quot;To a mind that is still, the whole universe surrenders.&quot;</Styled.CardText>
            <Styled.Button
              type="submit"
              onClick={() => handleClick('serenity')}>
              START
            </Styled.Button>
          </Styled.Card>
        </SwiperSlide>
      </Swiper>
    </Styled.PageContainer>
  );
}

export default ProgramPage;