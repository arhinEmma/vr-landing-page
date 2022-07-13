import React, { useState, useEffect } from 'react';
// import components
import Header from './components/Header';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial';
import Explore from './components/Explore';
import NavMobile from './components/NavMobile';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);
  return (
    <div className='relative overflow-hidden before:hidden before:lg:flex before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px]'>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      {/* <div className='h-[2000px]'></div> */}
    </div>
  );
};

export default App;
