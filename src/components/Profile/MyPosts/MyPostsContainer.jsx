import React from "react"
import { connect } from 'react-redux'
import MyPosts from './MyPosts'


let addPostCreator = () => ({ type:'ADD-POST' })
let updateNewPostTextCreator = ( text ) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

let mapStateToProps = ( state ) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText 
  }
}
let mapDispatchToProps = ( dispatch ) => {
  return {
    updateNewPostText: ( text ) => {
    let action = updateNewPostTextCreator( text )
      dispatch( action )
  },
    addPost: () => { 
      dispatch( addPostCreator() )
    }
  }
}
let MyPostsContainer = connect( mapStateToProps,mapDispatchToProps )(MyPosts)

export default MyPostsContainer;