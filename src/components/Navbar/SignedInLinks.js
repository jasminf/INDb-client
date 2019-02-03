import React from 'react';
import {NavLink} from 'react-router-dom'

const SignIn = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'> Home </NavLink></li>
      <li><NavLink to='/'> Log Out </NavLink></li>
      <li><NavLink to='/fav_list' className='btn btn-floating yellow darken-2 lighten-1'>U</NavLink></li>
    </ul>
  )
};

export default SignIn;


//pink lighten-2