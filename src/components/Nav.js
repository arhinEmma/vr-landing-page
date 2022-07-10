import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className='flex items-center space-x-12 font-secondary'>
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
