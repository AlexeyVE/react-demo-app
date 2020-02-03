import React from "react";
import MyPosts from './MyPosts'

const MyPostsContainer = ( props ) => {
  let state = props.store.getState()
  let addPostActionCreator = () => ({ type:'ADD-POST' })
  let updateNewPostTextActionCreator = ( text ) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

  let addPost = () => { 
    props.store.dispatch( addPostActionCreator() )
  }

  let onPostChange = ( text ) => {
    let action = updateNewPostTextActionCreator( text )
    props.store.dispatch( action )
  }                                                                                          
  return (
    <MyPosts updateNewPostText = { onPostChange } 
             addPost = { addPost } 
             posts = { state.profilePage.posts }
             newPostText = { state.profilePage.newPostText }/>  
  )
}

export default MyPostsContainer;