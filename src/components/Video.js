import React, { useState } from 'react';
import '../modalVideo.scss';
import ModalVideo from 'react-modal-video';
import { BsPlayCircleFill } from 'react-icons/bs';
const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='bg-[#534686]/30 bg-no-repeat py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between'>
          <h3
            data-aos='fade-right'
            data-aos-offset='400'
            className='text-2xl font-semibold mb-8 lg:mb-0'
          >
            Awesome experiences with virtual reality world
          </h3>
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={isOpen}
            videoId='NOk_M1Ib5F0'
            onClose={() => setOpen(false)}
          />
          <div
            data-aos='fade-left'
            data-aos-offset='400'
            className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'
          >
            <div onClick={() => setOpen(!isOpen)} className='cursor-pointer'>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
