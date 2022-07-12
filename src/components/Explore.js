import React from 'react';

// import image
import Image from '../assets/img/explore.png';

const Explore = () => {
  return (
    <section className='h-[400px]'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-12'>
          <h3
            data-aos='fade-right'
            data-aos-offset='900'
            className='text-3xl font-semibold mb-8'
          >
            Explore product in new way
          </h3>
          <p className='max-w-xs text-xl mb-6'>
            We specialize in creating visual identities for products and brands
            in your company.
          </p>
          <form className='flex gap-x-4'>
            <input
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md'
              type='text'
            />
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
