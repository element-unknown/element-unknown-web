import React from 'react'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <a href="/" className="brand-logo">Element Unknown</a>
        <SignedOutLinks />    
        <SignedInLinks />
        <ul className="right hide-on-med-and-down">
          <li><a href="#">News</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
