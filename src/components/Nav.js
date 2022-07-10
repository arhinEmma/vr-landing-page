import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className='flex items-center space-x-8 text-[15px] font-secondary font-medium'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Company</a>
        </li>
        <li>
          <a href='#'>Features</a>
        </li>
        <li className='btn'>
          <a href='#'>Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
