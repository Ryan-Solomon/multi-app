import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.scss';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-items'>
        <Link to='/'>
          <li className='home'>Home</li>
        </Link>
        <Link to='/infinitescroll'>
          <li>Infinite Scroll</li>
        </Link>
        <Link to='/quiz'>
          <li>Quiz</li>
        </Link>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link to='/grudges'>
          <li>Grudges</li>
        </Link>
        <Link to='/accordion'>
          <li>Accordion</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
