import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import logo from './butters_scifi.png';


const Navbar = () => {
  return(
    <div className="navbar-fixed">
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left" >
        <img src={logo} width="85" height="65" alt="logo"/>
           INDb</Link>
        <ul className="right hide-on-med-and-down">
          <li> <SignInLinks/> </li>
          <li> <SignOutLinks/> </li>
        </ul>

      </div>
    </nav>
    </div>
  )
};
export default Navbar;