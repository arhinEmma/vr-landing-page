import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Video from './components/Video';

const App = () => {
  return (
    <div className='relative overflow-hidden before:hidden before:lg:flex before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-36'>
      <Header />
      <Banner />
      <Experience />
      <Video />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
