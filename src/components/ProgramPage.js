import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Styled.Card>
            <h1>Card 1</h1>
            <img src="./assets/startpageimg.png" alt="something" />
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h1>Card 2</h1>
            <img src="./assets/startpageimg.png" alt="something" />
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h1>Card 3</h1>
            <img src="./assets/startpageimg.png" alt="something" />
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h1>Card 4</h1>
            <img src="./assets/startpageimg.png" alt="something" />
          </Styled.Card>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Card>
            <h1>Card 5</h1>
            <img src="./assets/startpageimg.png" alt="something" />
          </Styled.Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProgramPage;