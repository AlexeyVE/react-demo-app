import React from "react"
import Post from "./Post/Post"
import AddPostForm from './Post/AddPostForm'

const MyPosts =  ( props )  => {

  let addNewPost =  ( val )  => {
    props.addPost( val.postBody )
  }  

  let postsElements = props.posts.map( ( post,index ) => 
                                  <Post
                                    message = { post.message }
                                    likesCount = { post.likesCount } 
                                    key = { index }
                                  />
                                )
  return (
      <div className = "posts">
        <div className = "add-new-post">
          <AddPostForm onSubmit = { addNewPost } /> 
        </div>
        <h4>Posts</h4>
        { postsElements }
      </div>
  )
}

export default MyPosts;