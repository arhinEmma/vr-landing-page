import React, { useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Video from './components/Video';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);
  return (
    <div className='relative overflow-hidden before:hidden before:lg:flex before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px]'>
      <Header />
      <Banner />
      <Experience />
      <Video />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
