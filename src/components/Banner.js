import React from 'react';

// import image
import Img from '../assets/img/banner-img.png';
import Users from './Users';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div>
            <h1
              data-aos='fade-up'
              data-aos-delay='500'
              className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
            >
              Let’s Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              data-aos='fade-up'
              data-aos-delay='600'
              className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
            >
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              className='flex items-center space-x-4 text-[15px] max-w-[320px] mx-auto lg:space-x-8 lg:mx-0 lg:max-w-none mb-12'
            >
              <button className='btn'>Get it now</button>
              <a
                className='border-b-2 border-transparent hover:border-white'
                href='#'
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div data-aos='fade-down' data-aos-delay='800'>
            <img src={Img} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
