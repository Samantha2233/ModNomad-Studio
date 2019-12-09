import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div id='nav'>
      <img id='logo' src='../../../images/pseudo-logo.png' alt='logo' />
      <NavLink className='nav-item' to='/social-practice'>Social Practice</NavLink>
      <NavLink className='nav-item' to='/spaces'>Spaces</NavLink>
      <NavLink className='nav-item' to='/editorial'>Editorial</NavLink>
    </div>
  )
}


export default Nav;