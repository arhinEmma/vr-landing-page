import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-20'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3
            data-aos='fade-right'
            data-aos-offset='900'
            className='text-3xl font-semibold mb-8'
          >
            Explore product in new way
          </h3>
          <p
            className='max-w-xs text-xl mb-12'
            data-aos='fade-right'
            data-aos-offset='900'
          >
            We specialize in creating visual identities for products and brands
            in your company.
          </p>
          <form
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
            data-aos='fade-up'
            data-aos-offset='900'
          >
            <input
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md'
              type='text'
              placeholder='Your email'
            />
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
