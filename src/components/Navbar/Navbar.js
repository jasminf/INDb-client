import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import logo from './butters_scifi.png';

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo" >
        <img src={logo} width="85" height="65" alt="logo"/>
          INDb</Link>
        <SignInLinks/>
        <SignOutLinks/>
      </div>
    </nav>
  )
};
export default Navbar;