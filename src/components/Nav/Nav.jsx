import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav';

const Nav = () => {
  return (
    <div>
      <NavLink to='/social-practice'>Social Practice</NavLink>
      <NavLink to='/spaces'>Spaces</NavLink>
      <NavLink to='/editorial'>Editorial</NavLink>
    </div>
  )
}


export default Nav;