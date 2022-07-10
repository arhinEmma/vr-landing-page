import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header
      className='py-6'
      data-aos='fade-down'
      data-aos-duration='2000'
      data-aos-delay='900'
    >
      <div className='container mx-auto'>
        {/* logo */}
        <a href='#'>
          <img className='h-[30px]' src={Logo} alt='' />
        </a>
      </div>
    </header>
  );
};

export default Header;
