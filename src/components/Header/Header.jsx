import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

const Header = ( props ) => {
  console.log( props )
  return (
    <header className = "header padding color-9">    
      <div className= { style.login_block }>
        { !props.isAuth 
        ? <NavLink to = "/login">log in</NavLink>
        : <span> { props.login } </span> }
      </div>
      <div className = {style.is_auth}>
      </div>
    </header>
  )
}

export default Header;