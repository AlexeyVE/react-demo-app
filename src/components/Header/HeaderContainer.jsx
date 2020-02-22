import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { isAuth, logout } from '../../redux/authReducer'


 class HeaderContainer extends React.Component {
  componentDidMount () {
    // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{ withCredentials:true })
    this.props.isAuth()
  } 
  render () {
    return (
      <Header logout ={ this.props.logout } 
              login = { this.props.login } 
              isAuth = { this.props.isAuthUser } />
      )
  }
}

const mapStateToProps = ( state ) => {
  return {
    isAuthUser: state.auth.isAuth,
    login: state.auth.login
  }
}
const mapDispatchToProps = {
  isAuth,
  logout
}
export default connect(mapStateToProps, mapDispatchToProps)( HeaderContainer )