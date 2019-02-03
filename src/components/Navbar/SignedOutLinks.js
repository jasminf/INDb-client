import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

const SignInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'> Home </NavLink></li>
      <li><NavLink to='/signin'> Log In </NavLink></li>
    </ul>
  )
};


export default SignInLinks;