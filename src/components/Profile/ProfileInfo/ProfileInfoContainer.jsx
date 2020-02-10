import React from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ProfileInfo from './ProfileInfo'
import { getUserProfileCreator } from '../../../redux/profileReducer'

class ProfileInfoContainer extends React.Component {
  constructor ( props ) {
    super( props )
  }
  getUsers = async () => {
      let userId = this.props.match.params.userId
      let url = 'https://social-network.samuraijs.com/api/1.0/profile/'
      let res = await axios.get( url + userId )
      return this.props.getUserProfile ( res.data )
  }
  componentDidMount() { 
    console.log(this.props)   
    this.getUsers()
  }  
  render() {
    return(
      <ProfileInfo profileInfo = { this.props.profileInfo } />
      )
  }
}
let mapStateToProps = ( state ) => {
  return {
    profileInfo : state.profilePage.profile
  }
}
let mapDispatchToProps = ( dispatch ) => {
  return {
    getUserProfile : ( profile ) => {
      return dispatch( getUserProfileCreator ( profile ))
    }
  }
}
const ProfileWithUrlData = withRouter( ProfileInfoContainer )

export default connect( mapStateToProps, mapDispatchToProps )( ProfileWithUrlData )