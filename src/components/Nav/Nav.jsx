import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className = "nav cl-effect-1">
      <ul>
        <li>
          <NavLink to = "/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to = "/dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink to = "/users">Users</NavLink>
        </li>
        <li>
          <NavLink to = "/news">News</NavLink>
        </li>
        <li>
          <NavLink to = "/music">Music</NavLink>
        </li>
        <li>
          <NavLink to = "/settings">Settings</NavLink>   
        </li>
      </ul>  
  </nav>
  );
}

export default Nav;
