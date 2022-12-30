/* eslint-disable max-len */
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper';
import { Styled } from './ProgramPage.styled';

const ProgramPage = () => {
  return (
    <>
      <div>
        <h1>What do you want to improve about yourself?</h1>
      </div>
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
            <h2>Happiness</h2>
            <img src="./assets/startpageimg.png" alt="something" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</p>
            <button type="submit">Start</button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h2>Health</h2>
            <img src="./assets/startpageimg.png" alt="something" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</p>
            <button type="submit">Start</button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h2>Confidence</h2>
            <img src="./assets/startpageimg.png" alt="something" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</p>
            <button type="submit">Start</button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h2>Focus</h2>
            <img src="./assets/startpageimg.png" alt="something" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</p>
            <button type="submit">Start</button>
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h2>Serenity</h2>
            <img src="./assets/startpageimg.png" alt="something" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ornare dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna nulla, sit amet blandit leo varius vel. Donec semper mauris dolor, lacinia suscipit risus pharetra vehicula. Donec ut rhoncus nibh, varius tempor ante. Proin ipsum lectus, dapibus.</p>
            <button type="submit">Start</button>
          </Styled.Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProgramPage;