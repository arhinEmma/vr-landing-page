import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li>
          <a className='nav-link' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='nav-link' href='#'>
            Company
          </a>
        </li>
        <li>
          <a className='nav-link' href='#'>
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

export default Nav;
