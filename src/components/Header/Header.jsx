import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

const Header = ( props ) => {
  console.log( props )
  return (
    <header className = "header padding color-9">    
      <div className= { style.login_block }>
      { props.isAuth 
        ? <div>
            <span> { props.login } </span>
            <button onClick = { props.logout }>logout</button> 
          </div> 
        : <NavLink to = "/login">log in</NavLink>}
      </div>
      <div className = { style.is_auth }>
      </div>
    </header>
  )
}

export default Header;

