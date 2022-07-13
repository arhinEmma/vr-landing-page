import React from 'react';

// import icon
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
      <IoClose
        onClick={() => setNavMobile(false)}
        className='text-3xl absolute left-4 top-4'
      />
      <ul className='flex flex-col items-center justify-center h-full font-secondary space-y-8'>
        <li>
          <a className='text-lg' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='text-lg' href='#'>
            Company
          </a>
        </li>
        <li>
          <a className='text-lg' href='#'>
            Features
          </a>
        </li>
        <li className='btn'>
          <a href='#'>Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
