import React from 'react';

// import images
import Headset1Img from '../assets/img/headset-1.png';
import Headset2Img from '../assets/img/headset-2.png';
import Headset3Img from '../assets/img/headset-3.png';
import Headset4Img from '../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-down'
          data-aos-offset='300'
          className='text-3xl font-bold mb-6'
        >
          Mixed Reality Headsets
        </h2>
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          <div
            className='relative'
            data-aos-delay='1000'
            data-aos='zoom-in'
            data-aos-offset='300'
          >
            <img src={Headset1Img} alt='' />
            <div className='absolute bottom-0 bg-white/30 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>
                A Network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos-delay='1500'
            data-aos='zoom-in'
            data-aos-offset='300'
          >
            <img src={Headset2Img} alt='' />
            <div className='absolute bottom-0 bg-white/30 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p>
                AI and IoT are both emerging innovative technologies with a lot
                of potentials.
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos-delay='2000'
            data-aos='zoom-in'
            data-aos-offset='300'
          >
            <img src={Headset3Img} alt='' />
            <div className='absolute bottom-0 bg-white/30 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>
                HoloLens display information, blend with the real world , or
                even simulate a virtual world.
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos-delay='2500'
            data-aos='zoom-in'
            data-aos-offset='300'
          >
            <img src={Headset4Img} alt='' />
            <div className='absolute bottom-0 bg-white/30 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
              <p>
                Method is great to start students reading and inferring with
                little assistance from the instructor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
