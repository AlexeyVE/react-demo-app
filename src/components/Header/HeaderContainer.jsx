import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { isAuth } from '../../redux/authReducer'


 class HeaderContainer extends React.Component {
  componentDidMount () {
    // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{ withCredentials:true })
    this.props.isAuth()
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
const mapDispatchToProps = {
  isAuth
}
export default connect(mapStateToProps, mapDispatchToProps)( HeaderContainer )