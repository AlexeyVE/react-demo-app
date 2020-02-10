import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

const Header = () => {
  return (
    <header className = "header padding color-9">    
      <div className= { style.login_block }>
        <NavLink to = "/login">
          log in
        </NavLink>
      </div>
    </header>
  );
}

export default Header;