import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

export const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 3</SwiperSlide>
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 4</SwiperSlide>
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 5</SwiperSlide>
      <SwiperSlide className='bg-white/10 min-h-[240px]'>Slide 6</SwiperSlide>
    </Swiper>
  );
};
