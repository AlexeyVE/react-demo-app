import React from'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

import style from './login.module.scss'

const Login = ( props ) => {

  const getAuthData = ( authData ) => {
    props.login ( authData.email, authData.password )
  }
  if ( props.isAuth ) return <Redirect to = '/profile'/>
  return (
    <div className = { style.loginForm__wrapper }>
      <h4>Login</h4>
      <LoginForm onSubmit = { getAuthData }/>
    </div>
    )
}
const mapStateToProps = ( state ) => {
  return {
    isAuth: state.auth.isAuth
  }
}
export default connect( mapStateToProps ,{ login, logout })(Login) 

