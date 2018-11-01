import React from 'react'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <a href="/" className="brand-logo">Element Unknown</a>
        <SignedOutLinks />    
        <SignedInLinks />
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/news">News</NavLink></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Shop</a></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
