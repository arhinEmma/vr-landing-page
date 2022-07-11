import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='bg-purple-400/10 max-h-[400px] py-12'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-6'>What our clients say</h2>
        <p className='max-w-2xl mb-24'>
          See what our customer say about us. It really matter for us. How good
          or bad we will make ir for evaluation to make EhyalLive better.
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
