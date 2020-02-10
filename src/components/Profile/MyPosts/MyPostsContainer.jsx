import React from "react"
import { connect } from 'react-redux'
import MyPosts from './MyPosts'


let addPostActionCreator = () => ({ type:'ADD-POST' })
let updateNewPostTextActionCreator = ( text ) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

let mapStateToProps = ( state ) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText 
  }
}
let mapDispatchToProps = ( dispatch ) => {
  return {
    updateNewPostText: ( text ) => {
    let action = updateNewPostTextActionCreator( text )
      dispatch( action )
  },
    addPost: () => { 
      dispatch( addPostActionCreator() )
    }
  }
}
let MyPostsContainer = connect( mapStateToProps,mapDispatchToProps )(MyPosts)

export default MyPostsContainer;