import React from "react"
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { addPostCreator } from '../../../redux/profileReducer'

let mapStateToProps = ( state ) => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = ( dispatch ) => {
  return {
    addPost: ( postBody ) => { 
      dispatch( addPostCreator( postBody ) )
    }
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( MyPosts )