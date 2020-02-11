import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { authCreator } from '../../redux/authReducer'

 class HeaderContainer extends React.Component {
  componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{ withCredentials:true })
    .then( res => {
      if (res.data.resultCode === 0 ) {
          let { id, email, login } = res.data.data
          console.log(id,email,login)
          this.props.setAuthData ( id, email, login  )
      }
      else { alert('YOU ARE NOT AUTHORITHED') }
    })
  } 
  render () {
    return (
      <Header { ...this.props } 
              login = { this.props.login } 
              isAuth = { this.props.isAuth } />
      )
  }
}

const mapStateToProps = ( state ) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    setAuthData : (userId, email, login) => {
      dispatch( authCreator ( userId, email, login ) )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)( HeaderContainer )