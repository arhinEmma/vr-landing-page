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
      modules={[Pagination]}
      className='mySwiper'
    >
      {/* linear-gradient(0deg, #130613 0%, #2A1428 51.15%, #331A35 102.63%); */}

      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 1
      </SwiperSlide>
      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 2
      </SwiperSlide>
      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 3
      </SwiperSlide>
      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 4
      </SwiperSlide>
      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 5
      </SwiperSlide>
      <SwiperSlide className='min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
        Slide 6
      </SwiperSlide>
    </Swiper>
  );
};
