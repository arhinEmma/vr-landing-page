import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-md'>
          <h2
            data-aos='fade-up'
            data-aos-offset='900'
            data-aos-delay='1000'
            className='text-3xl font-bold mb-6'
          >
            What our clients say
          </h2>
          <p
            data-aos='fade-up'
            data-aos-offset='900'
            data-aos-delay='1200'
            className='max-w-2xl mb-24'
          >
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
