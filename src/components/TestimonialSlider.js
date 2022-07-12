import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Pagination } from 'swiper';
// import data
import { slider } from '../data';

export const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      className='mySwiper'
    >
      {slider.map((slide, index) => {
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            className='rounded-lg p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'
            key={index}
          >
            <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>
            <div className='flex items-center gap-x-4'>
              <div className='w-14'>
                <img src={image} alt='' />
              </div>
              <div>
                <div className='font-medium text-base'>{name}</div>
                <div className='font-medium text-rose-600'>{email}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
